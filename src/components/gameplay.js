import Game from '../game/game';
import createElement from '../util/create_element';
import gameControls from './game_controls';
import { removeAllChildNodes, clearDataset } from '../util/dom_nodes_util';
import { backToMenu } from '../navigation/main_menu';
const regeneratorRuntime = require("regenerator-runtime");

export default class Gameplay {
  constructor(rootEl) {
    removeAllChildNodes(rootEl);
    this.rootEl = rootEl;
    this.gameRoot = createElement('div', { id: 'game' });
    const back = backToMenu(rootEl);
    rootEl.appendChild(back);
    rootEl.appendChild(this.gameRoot);
    this.elements = {};
    ['game-over', 'court-deck', 'treasury', 'player-one', 'player-two'].forEach(id => {
      let subroot = createElement('div', { id });
      this.gameRoot.appendChild(subroot);
      this.elements[id] = subroot;
    });
    this.game = new Game({
      gameRoot: this.gameRoot,
      playerRoots: [
        this.elements['player-one'],
        this.elements['player-two']
      ],
      courtDeckRoot: this.elements['court-deck'],
      treasuryRoot: this.elements['treasury']
    });
    this.game.startGame();
    this.gameOver = false;
    this.turnStartControls();

    this.turnSwitchCallback = this.turnSwitchCallback.bind(this);
    // this.clearGameRootDataset = this.clearGameRootDataset.bind(this);
    this.turnStartControls = this.turnStartControls.bind(this);
  }

  turnStartControls() {
    let turnStartControls = gameControls(this.game, this.game.currentPlayer, this.turnSwitchCallback.bind(this));
    this.game.currentPlayer.renderControls(turnStartControls);
  }

  turnSwitchCallback() {
    clearDataset(this.gameRoot);
    this.game.switchTurns();
    if (this.game.currentPlayer.idx === 2) {
      this.currentControls = this.elements['player-two'].childNodes[0];
      this.targetControls = this.elements['player-one'].childNodes[0];
    } else {
      this.currentControls = this.elements['player-one'].childNodes[0];
      this.targetControls = this.elements['player-two'].childNodes[0];
    }
    this.turnStartControls();
  }

  renderControls() {
    let controlsRendered = gameControls(this.elements['modal'], this.game.currentPlayer, this.game, this.turnCallback.bind(this));
    // this.elements['player-one'].replaceChild(controlsRendered, this.elements['player-one'].childNodes[0]);
    // if (!currentPlayerControls) return;
    removeAllChildNodes(this.elements['game-controls']);
    this.elements['game-controls'].appendChild(controlsRendered);
  }


  renderAll() {
    if (this.gameOver) {
      this.elements['game-over'].classList.toggle('present');
      let exitGame = () => removeAllChildNodes(this.rootEl);
      let playAgain = () => new Gameplay(this.rootEl);
      let gameOverModal = createModal('game-over', { exitGame: exitGame.bind(this), playAgain: playAgain.bind(this) }, this.winner, null);
      removeAllChildNodes(this.elements['modal']);
      this.elements['game-over'].appendChild(gameOverModal);
    } else {
      this.game.currentPlayer.flipAllCardsUp();
      this.game.currentTarget.flipAllCardsDown();
      this.renderCourt();
      this.renderPlayerOne();
      this.renderPlayerTwo();
      this.renderControls();
      // this.elements['game-controls'].appendChild(createElement('buttton', { id: 'start-game', text: 'Start Game', onClick: () => this.runGame() }));
    }
    // this.rootEl.innerHTML = '';
    // this.rootEl.appendChild(createElement('div',
    //   { id: 'game' },
    //   this.renderCurrentTarget(), this.renderCourt(), this.renderCurrentPlayer()
    // ));
  }


}