import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Tax extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
    this.readyForStepTwo, this.readyForStepThree = false, false;
    this.modalEventListener(this.readyForStepTwo, this.firstModal, () => {
      this.stepTwoOptions = Object.assign({}, this.firstModal.dataset);
      this.readyForStepTwo = true;
    })
    this.awaitStepTwo();
    this.awaitStepThree();
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

  stepTwo() {
    this.readyForStepThree = false;
    removeAllChildNodes(this.rootEl);
    if (Boolean(this.stepTwoOptions.targetChallenge)) {
      let dukeIdx = this.currentPlayer.cards.map(card => card.character).indexOf('Duke');
      if (dukeIdx > -1) {
        this.allowed = true;
        this.currentPlayer.returnInfluence.apply(this.currentPlayer, [dukeIdx, false]);
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
        this.currentPlayer.tax.apply(this.currentPlayer);
      }
      this.complete = true;
      return;
    }
    this.modalEventListener(this.readyForStepThree, this.secondModal, () => {
      this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
      this.readyForStepThree = true;
    });
  }

  stepThree() {
    removeAllChildNodes(this.rootEl);
    let idx1 = Number(this.stepThreeOptions.idx1);
    if (this.allowed) {
      this.effect = () => {
        this.currentPlayer.tax.apply(this.currentPlayer);
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