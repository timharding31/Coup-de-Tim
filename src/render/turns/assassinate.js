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
    if (Boolean(this.stepTwoOptions.targetBlock)) {
      this.allowed = false;
      this.secondModal = createModalNew('challenge', 'player', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
    } else if (Boolean(this.stepTwoOptions.targetChallenge)) {
      let assassinIdx = this.currentPlayer.cards.map(card => card.character).indexOf('Assassin');
      if (assassinIdx > -1) {
        this.currentPlayer.returnInfluence.apply(this.currentPlayer, [assassinIdx, false]);
        this.effect = () => {
          this.currentPlayer.assassinate.apply(this.currentPlayer);
          this.currentTarget.receiveDoubleAssassinate.apply(this.currentTarget);
        };
        this.allowed = true;
        this.complete = true;
      } else {
        this.allowed = false;
        this.secondModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.secondModal);
      }
    } else {
      this.allowed = true;
      this.secondModal = createModalNew('forfeit-action', 'target', this.action, this.currentPlayer, this.currentTarget);
      this.rootEl.appendChild(this.secondModal);
    }
    this.modalEventListener(this.readyForStepThree, this.secondModal, () => {
      this.stepThreeOptions = Object.assign({}, this.secondModal.dataset);
      this.readyForStepThree = true;
    });
  }

  stepThree() {
    removeAllChildNodes(this.rootEl);
    if (Boolean(this.stepThreeOptions.playerChallenge)) {
      let contessaIdx = this.currentTarget.cards.map(card => card.character).indexOf('Contessa');
      if (contessaIdx > -1) {
        this.currentTarget.returnInfluence(contessaIdx, false);
        this.allowed = false;
        this.thirdModal = createModalNew('forfeit', 'player', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(this.thirdModal);
        this.modalEventListener(this.readyForStepFour, this.thirdModal, () => {
          this.stepFourOptions = Object.assign({}, this.thirdModal.dataset);
          this.readyForStepFour = true;
        });
      } else {
        this.effect = () => {
          this.currentPlayer.assassinate.apply(this.currentPlayer);
          this.currentTarget.receiveDoubleAssassinate.apply(this.currentTarget);
        };
        this.allowed = true;
        this.complete = true;
      }
    } else if (Boolean(this.stepThreeOptions.allow)) {
      this.effect = () => null;
      this.complete = true;
    } else if (this.allowed) {
      this.effect = () => {
        this.currentPlayer.assassinate.apply(this.currentPlayer);
        let idx1 = Number(this.stepThreeOptions.idx1);
        this.currentTarget.receiveAssassinate.apply(this.currentTarget, [idx1]);
      }
      this.complete = true;
    } else if (!this.allowed) {
      this.effect = () => {
        let idx1 = Number(this.stepThreeOptions.idx1);
        this.currentPlayer.receiveAssassinate.apply(this.currentPlayer, [idx1]);
      }
      this.complete = true;
    }
  }

  stepFour() {
    removeAllChildNodes(this.rootEl);
    this.effect = () => {
      let idx1 = Number(this.stepFourOptions.idx1);
      this.currentTarget.receiveAssassinate.apply(this.currentTarget, [idx1]);
    }
    this.complete = true;
  }

}