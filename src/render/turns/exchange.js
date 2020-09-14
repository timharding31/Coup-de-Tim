import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Assassinate extends Turn {
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
    if (this.stepTwoOptions.targetchallenge == 'true') {
      let ambassadorIdx = this.currentPlayer.cards.map(card => card.character).indexOf('Ambassador');
      if (ambassadorIdx > -1) {
        this.allowed = true;
        this.currentPlayer.returnInfluence.apply(this.currentPlayer, [ambassadorIdx, false]);
        this.secondModal = createModalNew('forfeit-challenge', 'target', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.secondModal);
      } else {
        this.allowed = false;
        this.secondModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.secondModal);
      }
      this.secondModal.addEventListener('submit', (e) => {
        e.preventDefault();
        this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
        this.readyForStepThree = true;
        this.secondModal.remove();
      })
      return
    } else {
      this.allowed = true;
      this.currentPlayer.exchangePartOne.apply(this.currentPlayer);
      this.secondModal = createModalNew('exchange', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
      this.secondModal.addEventListener('submit', (e) => {
        e.preventDefault();
        this.stepFourOptions = Object.assign({}, this.secondModal.dataset);
        this.readyForStepFour = true;
        this.secondModal.remove();
      })
      return
    }
  }

  stepThree() {
    let idx1 = Number(this.stepThreeOptions.idx1);
    if (this.allowed) {
      this.currentTarget.receiveAssassinate.apply(this.currentTarget, [idx1]);
      this.allowed = true;
      this.currentPlayer.exchangePartOne.apply(this.currentPlayer);
      this.thirdModal = createModalNew('exchange', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.thirdModal);
      this.thirdModal.addEventListener('submit', (e) => {
        e.preventDefault();
        this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
        this.readyForStepFour = true;
        this.thirdModal.remove();
      })
    } else {
      this.effect = () => {
        this.currentPlayer.receiveAssassinate.apply(this.currentPlayer, [idx1]);
      }
      this.complete = true;
    }
  }

  stepFour() {
    this.effect = () => {
      let idx1 = Number(this.stepFourOptions.idx1);
      let idx2 = Number(this.stepFourOptions.idx2);
      this.currentPlayer.exchangePartTwo.apply(this.currentPlayer, [idx1, idx2]);
    }
    this.complete = true;
  }

}