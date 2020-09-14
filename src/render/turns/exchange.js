import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Assassinate extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
    this.readyForStepTwo, this.readyForStepThree, this.readyForStepFour = false, false, false;
    this.modalEventListener(this.readyForStepTwo, this.firstModal, () => {
      this.stepTwoOptions = Object.assign({}, this.firstModal.dataset);
      this.readyForStepTwo = true;
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
    this.readyForStepThree = false;
    removeAllChildNodes(this.rootEl);
    if (Boolean(this.stepTwoOptions.targetChallenge)) {
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
      this.modalEventListener(this.readyForStepThree, this.secondModal, () => {
        this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
        this.readyForStepThree = true;
      });
      return
    } else {
      this.allowed = true;
      this.currentPlayer.exchangePartOne.apply(this.currentPlayer);
      this.secondModal = createModalNew('exchange', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
      this.modalEventListener(this.readyForStepFour, this.secondModal, () => {
        this.stepFourOptions = Object.assign({}, this.secondModal.dataset);
        this.readyForStepFour = true;
      });
      return
    }
  }

  stepThree() {
    removeAllChildNodes(this.rootEl);
    let idx1 = Number(this.stepThreeOptions.idx1);
    if (this.allowed) {
      this.currentTarget.receiveAssassinate.apply(this.currentTarget, [idx1]);
      this.allowed = true;
      this.currentPlayer.exchangePartOne.apply(this.currentPlayer);
      this.thirdModal = createModalNew('exchange', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.thirdModal);
      this.modalEventListener(this.readyForStepFour, this.thirdModal, () => {
        this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
        this.readyForStepFour = true;
      });
    } else {
      this.effect = () => {
        this.currentPlayer.receiveAssassinate.apply(this.currentPlayer, [idx1]);
      }
      this.complete = true;
    }
  }

  stepFour() {
    removeAllChildNodes(this.rootEl);
    this.effect = () => {
      let idx1 = Number(this.stepFourOptions.idx1);
      let idx2 = Number(this.stepFourOptions.idx2);
      this.currentPlayer.exchangePartTwo.apply(this.currentPlayer, [idx1, idx2]);
    }
    this.complete = true;
  }

}