import createModalNew from '../../util/create_modal';
import { removeAllChildNodes } from '../../util/dom_nodes_util';

export default class Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    this.rootEl = rootEl;
    rootEl.classList.remove('not-present');
    rootEl.classList.add('present');
    removeAllChildNodes(this.rootEl);
    this.game = game;
    this.currentPlayer = game.currentPlayer;
    this.currentTarget = game.currentTarget;
    this.turnCallBack = turnCallBack;
    this.action = action;
    this.effect = () => this.currentPlayer.income();
    this.complete = false;
    this.allowed = true;
    if (challengeable && blockable) {
      this.firstModal = createModalNew('block-challenge', 'target', action, this.currentPlayer, this.currentTarget);
    } else if (challengeable) {
      this.firstModal = createModalNew('challenge', 'target', action, this.currentPlayer, this.currentTarget);
    } else if (blockable) {
      this.firstModal = createModalNew('block', 'target', action, this.currentPlayer, this.currentTarget);
    } else if (action === 'Coup') {
      this.firstModal = createModalNew('forfeit-action', 'target', action, this.currentPlayer, this.currentTarget);
    }
    if (this.firstModal) {
      rootEl.appendChild(this.firstModal);
    } else {
      this.complete = true;
    }
    this.awaitTurnEnd();
  }

  awaitTurnEnd() {
    const turnEndLoop = () => {
      if (this.complete) {
        this.effect();
        this.rootEl.classList.remove('present');
        this.rootEl.classList.add('not-present');
        setTimeout(() => this.turnCallBack('turn-end'), 5);
      } else {
        setTimeout(turnEndLoop, 0);
      }
    }
    turnEndLoop();
  }

  
}