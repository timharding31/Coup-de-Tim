import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Steal extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
    this.readyForStepTwo, this.readyForStepThree, this.readyForStepFour = false, false, false;
    this.firstModal.addEventListener('submit', (e) => {
      e.preventDefault();
      this.stepTwoOptions = Object.assign({}, this.firstModal.dataset);
      this.readyForStepTwo = true;
      this.firstModal.remove();
    })
    this.awaitStepTwo();
    this.awaitStepThree();
    this.awaitStepFour();
  }

  awaitStepTwo() {
    const stepTwoLoop = () => {
      if (this.readyForStepTwo) {
        this.stepTwo();
      } else {
        setTimeout(stepTwoLoop, 0);
      }
    }
    stepTwoLoop();
  }

  awaitStepThree() {
    const stepThreeLoop = () => {
      if (this.readyForStepThree) {
        this.stepThree();
      } else {
        setTimeout(stepThreeLoop, 0);
      }
    }
    stepThreeLoop();
  }

  awaitStepFour() {
    const stepFourLoop = () => {
      if (this.readyForStepFour) {
        this.stepFour();
      } else {
        setTimeout(stepFourLoop, 0);
      }
    }
    stepFourLoop();
  }

  stepTwo() {
    if (this.stepTwoOptions.targetblock == 'true') {
      this.allowed = false;
      this.secondModal = createModalNew('challenge', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
    } else if (this.stepTwoOptions.targetChallenge == 'true') {
      let captainIdx = this.currentPlayer.cards.map(card => card.character).indexOf('Captain');
      if (captainIdx > -1) {
        this.allowed = true;
        this.currentPlayer.returnInfluence.apply(this.currentPlayer, [captainIdx, false]);
        this.secondModal = createModalNew('forfeit-challenge', 'target', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.secondModal);
      } else {
        this.allowed = false;
        this.secondModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.secondModal);
      }
    } else {
      this.allowed = true;
      this.effect = () => {
        this.currentPlayer.steal.apply(this.currentPlayer);
        this.currentTarget.receiveSteal.apply(this.currentTarget);
      }
      this.complete = true;
      return;
    }
    this.secondModal.addEventListener('submit', (e) => {
      e.preventDefault();
      this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
      this.readyForStepThree = true;
      this.secondModal.remove();
    })
  }

  stepThree() {
    if (this.stepThreeOptions.playerchallenge == 'true') {
      let captAmbIdx = this.currentTarget.cards.map(card => card.character).indexOf('Captain');
      if (captAmbIdx === -1) captAmbIdx = this.currentTarget.cards.map(card => card.character).indexOf('Ambassador');
      if (captAmbIdx > -1) {
        this.currentPlayer.returnInfluence.apply(this.currentPlayer, [captAmbIdx, false]);
        this.allowed = false;
        this.thirdModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.thirdModal);
        this.thirdModal.addEventListener('submit', (e) => {
          e.preventDefault();
          this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
          this.readyForStepFour = true;
          this.thirdModal.remove();
        })
      } else {
        this.allowed = true;
        this.thirdModal = createModalNew('forfeit-challenge', 'target', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.thirdModal);
        this.thirdModal.addEventListener('submit', (e) => {
          e.preventDefault();
          this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
          this.readyForStepFour = true;
          this.thirdModal.remove();
        })
      }
    } else if (this.stepThreeOptions.allow == 'true') {
      this.effect = () => null;
      this.complete = true;
    }
  }

  stepFour() {
    let idx1 = Number(this.stepFourOptions.idx1);
    if (this.allowed) {
      this.effect = () => {
        this.currentPlayer.steal.apply(this.currentPlayer);
        this.currentTarget.receiveSteal.apply(this.currentTarget);
        this.currentTarget.receiveAssassinate.apply(this.currentTarget, [idx1]);
      }
    } else {
      this.effect = () => {
        this.currentPlayer.receiveAssassinate.apply(this.currentPlayer, [idx1]);
      }
    }
    this.complete = true;
  }

}