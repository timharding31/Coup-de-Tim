import Game from '../game/game';
import createElement from '../util/create_element';
import createModal from '../util/_create_modal';
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
    removeAllChildNodes(rootEl);
    this.gameRoot = createElement('div', { id: 'game' });
    rootEl.appendChild(this.gameRoot);
    this.areas = {};
    ['game-over', 'modal', 'game-controls', 'player-one', 'court', 'player-two'].forEach(id => {
      let className = (id === 'modal') ? 'not-present' : '';
      let area = createElement('div', { id, class: className });
      this.gameRoot.appendChild(area);
      this.areas[id] = area;
      return;
    });
    this.game = new Game();
    this.game.startGame();
    this.gameOver = false;
    this.renderAll();
    this.awaitGameOver();
  }

  awaitGameOver() {
    const gameOverLoop = () => {
      this.gameOver = this.game.gameOver;
      if (this.gameOver) {
        this.winner = this.game.winner;
        setTimeout(this.renderAll.bind(this), 0);
      } else {
        setTimeout(gameOverLoop, 0);
      }
    }
    gameOverLoop();
  }

  // runGame() {
  //   this.game = new Game();
  //   this.game.startGame();
  //   this.renderAll();
  // }

  turnCallback(type) {
    if (!this.gameOver) {
      if (type === 'turn-end') {
        this.game.switchTurns();
        // setTimeout(this.game.switchTurns.bind(this.game), 0);
        setTimeout(this.renderAll.bind(this), 0);
      } else if (type == 'mid-turn-render') {
        this.renderPlayerOne();
        this.renderPlayerTwo();
      }
    }
  }

  renderCourt() {
    let courtRendered = [this.game.courtDeck.render.apply(this.game.courtDeck), this.game.treasury.render.apply(this.game.treasury)]
    removeAllChildNodes(this.areas['court']);
    courtRendered.forEach(child => this.areas['court'].appendChild(child));
  }

  renderPlayerOne() {
    let playerOneRendered = this.game.playerOne.render.apply(this.game.playerOne);
    removeAllChildNodes(this.areas['player-one']);
    playerOneRendered.forEach(child => this.areas['player-one'].appendChild(child));
  }

  renderPlayerTwo() {
    let playerTwoRendered = this.game.playerTwo.render.apply(this.game.playerTwo);
    removeAllChildNodes(this.areas['player-two']);
    playerTwoRendered.forEach(child => this.areas['player-two'].appendChild(child));
  }

  renderControls() {
    let controlsRendered = gameControls(this.areas['modal'], this.game.currentPlayer, this.game, this.turnCallback.bind(this));
    removeAllChildNodes(this.areas['game-controls']);
    this.areas['game-controls'].appendChild(controlsRendered);
  }


  renderAll() {
    if (this.gameOver) {
      let exitGame = () => removeAllChildNodes(this.rootEl);
      let playAgain = () => new Gameplay(this.rootEl);
      let gameOverModal = createModal('game-over', { exitGame: exitGame.bind(this), playAgain: playAgain.bind(this) }, this.winner, null);
      removeAllChildNodes(this.areas['modal']);
      this.areas['game-over'].appendChild(gameOverModal);
    } else {
      this.game.currentPlayer.flipAllCardsUp();
      this.game.currentTarget.flipAllCardsDown();
      this.renderControls();
      this.renderCourt();
      this.renderPlayerTwo();
      this.renderPlayerOne();
      // this.areas['game-controls'].appendChild(createElement('buttton', { id: 'start-game', text: 'Start Game', onClick: () => this.runGame() }));
    }
    // this.rootEl.innerHTML = '';
    // this.rootEl.appendChild(createElement('div',
    //   { id: 'game' },
    //   this.renderCurrentTarget(), this.renderCourt(), this.renderCurrentPlayer()
    // ));
  }


}