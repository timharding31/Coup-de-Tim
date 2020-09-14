import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Tax extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
    this.readyForStepTwo, this.readyForStepThree = false, false;
    this.firstModal.addEventListener('submit', (e) => {
      e.preventDefault();
      this.stepTwoOptions = Object.assign({}, this.firstModal.dataset);
      this.readyForStepTwo = true;
      this.firstModal.remove();
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
    if (this.stepTwoOptions.targetchallenge == 'true') {
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
    this.secondModal.addEventListener('submit', (e) => {
      e.preventDefault();
      this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
      this.readyForStepThree = true;
      this.secondModal.remove();
    })
  }

  stepThree() {
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