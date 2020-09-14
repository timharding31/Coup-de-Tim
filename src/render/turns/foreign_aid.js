import Turn from './turn';
import { removeAllChildNodes } from '../../util/dom_nodes_util';
import createModalNew from '../../util/create_modal';

export default class ForeignAid extends Turn {
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
    if (Boolean(this.stepTwoOptions.targetBlock)) {
      this.allowed = false;
      this.secondModal = createModalNew('challenge', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
      this.modalEventListener(this.readyForStepThree, this.secondModal, () => {
        this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
        this.readyForStepThree = true;
      });
    } else {
      this.effect = () => {
        this.currentPlayer.foreignAid.apply(this.currentPlayer);
      }
      this.complete = true;
    }
  }

  stepThree() {
    removeAllChildNodes(this.rootEl);
    if (Boolean(this.stepThreeOptions.playerChallenge)) {
      let dukeIdx = this.currentTarget.cards.map(card => card.character).indexOf('Duke');
      if (dukeIdx > -1) {
        this.currentTarget.returnInfluence(dukeIdx, false);
        this.allowed = false;
        this.thirdModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.thirdModal);
        this.modalEventListener(this.readyForStepFour, this.thirdModal, () => {
          this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
          this.readyForStepFour = true;
        });
      } else {
        this.thirdModal = createModalNew('forfeit-challenge', 'target', this.action, this.currentPlayer, this.currentTarget);
        this.allowed = true;
        this.rootEl.appendChild(this.thirdModal);
        this.modalEventListener(this.readyForStepFour, this.thirdModal, () => {
          this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
          this.readyForStepFour = true;
        });
      }
    } else {
      this.effect = () => null;
      this.complete = true;
    }
  }

  stepFour() {
    removeAllChildNodes(this.rootEl);
    let idx1 = Number(this.stepFourOptions.idx1);
    if (this.allowed) {
      this.effect = () => {
        this.currentPlayer.foreignAid.apply(this.currentPlayer);
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