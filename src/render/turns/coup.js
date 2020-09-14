import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class Coup extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
    this.readyForStepTwo = false;
    this.modalEventListener(this.readyForStepTwo, this.firstModal, () => {
      this.stepTwoOptions = Object.assign({}, this.firstModal.dataset);
      this.readyForStepTwo = true;
    })
    this.awaitStepTwo();
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

  stepTwo() {
    removeAllChildNodes(this.rootEl);
    this.effect = () => {
      this.currentPlayer.coup.apply(this.currentPlayer);
      let idx1 = Number(this.stepTwoOptions.idx1);
      this.currentTarget.receiveCoup.apply(this.currentTarget, [idx1]);
    }
    this.complete = true;
  }

}