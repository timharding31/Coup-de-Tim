import Game from '../game/game';
import createElement from '../util/create_element';
import gameControls from './game_controls';
import { removeAllChildNodes } from '../util/dom_nodes_util';

// this.turnActions = {
//   'Income': () => this.game.playerOne.income(),
//   'Foreign Aid': () => this.renderAll(),
//   'Coup': () => null,
//   'Tax': () => null,
//   'Assassinate': () => null,
//   'Exchange': () => null,
//   'Steal': () => null,
//   '': () => null,
// }

export default class Gameplay {
  constructor(rootEl) {
    this.rootEl = rootEl;
    rootEl.innerHTML = '';
    this.gameRoot = createElement('div', { id: 'game' });
    rootEl.appendChild(this.gameRoot);
    this.areas = {};
    ['game-controls', 'player-one', 'court', 'player-two'].forEach(id => {
      let area = createElement('div', { id });
      this.gameRoot.appendChild(area);
      this.areas[id] = area;
      return;
    });
    this.turnActions = {
      'Income': () => this.game.playerOne.income(),
      'Foreign Aid': () => this.renderAll(),
      'Coup': () => null,
      'Tax': () => null,
      'Assassinate': () => null,
      'Exchange': () => null,
      'Steal': () => null,
      '': () => null,
    }
    this.renderAll();
  }

  runGame() {
    this.game = new Game();
    this.game.startGame();
    this.renderAll();
  }

  renderCourt() {
    let courtRendered = [this.game.courtDeck.render(), this.game.treasury.render()]
    removeAllChildNodes(this.areas['court']);
    courtRendered.forEach(child => this.areas['court'].appendChild(child));
    // this.areas['court'].replaceWith(createElement('div', { id: 'court' }, this.game.courtDeck.render(), this.game.treasury.render()))
    // return createElement('div', { class: 'court' }, this.game.courtDeck.render(), this.game.treasury.render());
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
    this.areas['game-controls'].replaceWith(createElement('div', { id: 'game-controls' }, gameControls(this.game.currentPlayer, this.turnActions)));
  }


  renderAll() {
    // debugger
    if (this.game) {
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