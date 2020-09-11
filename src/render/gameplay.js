import Game from '../game/game';
import createElement from '../util/create_element';
import createModal from '../util/create_modal';
import gameControls from './game_controls';
import { removeAllChildNodes } from '../util/dom_nodes_util';
const regeneratorRuntime = require("regenerator-runtime");

const animateTopOfDeck = () => {
  return new Promise(() => (document.querySelector('.court-deck > #card:last-child')
    .animate([
      { transform: 'translate(-800px, -400px)' },
    ], {
      duration: 500
    })
  ));
}

export default class Gameplay {
  constructor(rootEl) {
    this.rootEl = rootEl;
    rootEl.innerHTML = '';
    this.gameRoot = createElement('div', { id: 'game' });
    rootEl.appendChild(this.gameRoot);
    this.areas = {};
    ['modal', 'game-controls', 'player-one', 'court', 'player-two'].forEach(id => {
      let className = (id === 'modal') ? 'not-present' : '';
      let area = createElement('div', { id, class: className });
      this.gameRoot.appendChild(area);
      this.areas[id] = area;
      return;
    });
    // this.renderAll = this.renderAll.bind(this);
    // this.turnSequence = this.turnSequence.bind(this);
    // this.modalEventListener = this.modalEventListener.bind(this);
    this.renderAll();
  }

  runGame() {
    this.game = new Game();
    this.game.startGame();
    this.renderAll();
  }

  turnCallback(type) {
    if (type === 'turn-end') {
      this.game.switchTurns();
      this.renderAll();
    } else if (type == 'mid-turn-render') {
      this.renderPlayerOne();
      this.renderPlayerTwo();
    }
  }

  // async turnSequence(returnObj) {
  //   await this.game.turnStepOne(returnObj)
  //     .then(action => this.game.turnStepTwo(action))
  //     .then(action => this.displayTargetChoiceModal(action))
  //     .then(returnObj => this.game.turnStepThree(returnObj))
  //     .finally(_ => this.renderAll());
  // }

  // displayTargetChoiceModal(action) {
  //   return new Promise(() => ({ action, idx1: 1, idx2: 1 }));
  // }

  // modalEventListener(action) {
  //   let returnObj = { action, wasBlocked: false, wasChallenged: false };
  //   let modal = document.getElementById('modal-block-challenge');
  //   [...modal.childNodes].forEach(child => child.addEventListener('click', () => {
  //     let classListArray = [...modal.classList];
  //     if (classListArray.includes('blocked')) {
  //       returnObj.wasBlocked = true;
  //     } else if (classListArray.includes('challenged')) {
  //       returnObj.wasChallenged = true;
  //     }
  //     debugger
  //     return new Promise(() => this.turnSequence(returnObj));
  //   }));
  // }

  // receiveModalResponse(returnObj) {
  //   const newReturnObj = { ...returnObj };
  //   let mod = document.getElementById('modal-block-challenge');
  //   let classListArray = [...mod.classList];
  //   if (classListArray.includes('blocked')) {
  //     returnObj.wasBlocked = true;
  //   } else if (classListArray.includes('challenged')) {
  //     returnObj.wasChallenged = true;
  //   }
  //   debugger
  //   return newReturnObj;
  // }

  renderCourt() {
    let courtRendered = [this.game.courtDeck.render(), this.game.treasury.render()]
    removeAllChildNodes(this.areas['court']);
    courtRendered.forEach(child => this.areas['court'].appendChild(child));
  }

  renderPlayerOne() {
    let playerOneRendered = this.game.playerOne.render();
    removeAllChildNodes(this.areas['player-one']);
    playerOneRendered.forEach(child => this.areas['player-one'].appendChild(child));
  }

  renderPlayerTwo() {
    let playerTwoRendered = this.game.playerTwo.render();
    removeAllChildNodes(this.areas['player-two']);
    playerTwoRendered.forEach(child => this.areas['player-two'].appendChild(child));
  }

  renderControls() {
    let controlsRendered = gameControls(this.areas['modal'], this.game.currentPlayer, this.game, this.turnCallback.bind(this));
    removeAllChildNodes(this.areas['game-controls']);
    this.areas['game-controls'].appendChild(controlsRendered);
  }


  renderAll() {
    // debugger
    if (this.game) {
      this.game.currentPlayer.flipAllCardsUp();
      this.game.currentTarget.flipAllCardsDown();
      this.renderControls();
      this.renderCourt();
      this.renderPlayerTwo();
      this.renderPlayerOne();
    } else {
      this.areas['game-controls'].appendChild(createElement('buttton', { id: 'start-game', text: 'Start Game', onClick: () => this.runGame() }));
    }
    // this.rootEl.innerHTML = '';
    // this.rootEl.appendChild(createElement('div',
    //   { id: 'game' },
    //   this.renderCurrentTarget(), this.renderCourt(), this.renderCurrentPlayer()
    // ));
  }


}