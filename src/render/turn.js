import createModal from '../util/create_modal';
import { removeAllChildNodes } from '../util/dom_nodes_util';

export default class Turn {
  constructor(rootEl, game, action, turnCallBack) {
    this.rootEl = rootEl;
    rootEl.classList.remove('not-present');
    rootEl.classList.add('present');
    this.game = game;
    this.currentPlayer = game.currentPlayer;
    this.currentTarget = game.currentTarget;
    this.action = action;
    this.turnCallBack = turnCallBack;
    this.returnObj = { action };
    this.readyForStepThree = false;
    this.displayBlockChallengeModal();
    this.awaitPlayerChoiceModal();
    this.awaitTurnEnd();
  }

  displayBlockChallengeModal() {
    let modal = createModal('block-challenge', this.action, this.currentPlayer, this.currentTarget);
    this.rootEl.appendChild(modal);
    this.addModalEventListener('modal-block-challenge', this.game.turnStepOne);
  }

  awaitPlayerChoiceModal() {
    const playerChoiceLoop = () => {
      if (this.readyForStepThree) {
        // type, action, currentPlayer, currentTarget
        let modal = createModal('player-choice', this.action, this.currentPlayer, this.currentTarget);
        this.rootEl.appendChild(modal);
        this.addModalEventListener('modal-player-choice', this.game.turnStepThree);
      } else {
        setTimeout(playerChoiceLoop, 1);
      }
    }
    playerChoiceLoop();
  }

  awaitTurnEnd() {
    const turnEndLoop = () => {
      if (this.action === 'Turn Complete') {
        this.rootEl.classList.remove('present');
        this.rootEl.classList.add('not-present');
        removeAllChildNodes(this.rootEl);
        this.turnCallBack('turn-end');
      } else {
        setTimeout(turnEndLoop, 1);
      }
    }
    turnEndLoop();
  }

  addModalEventListener(modalId, callback) {
    let modal = document.getElementById(modalId);
    let returnObj = { action: this.action, wasBlocked: false, wasChallenged: false };

    const modalLoop = () => {
      if (modal) {
        let submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', () => {
          let dataObj = submitButton.dataset;
          returnObj = Object.assign({}, returnObj, dataObj);
          this.action = callback(returnObj);
          this.turnCallBack('mid-turn-render');
          this.readyForStepThree = true;
          removeAllChildNodes(this.rootEl);
        })
      } else {
        setTimeout(modalLoop, 1);
      }
    }
    modalLoop();
  }

}