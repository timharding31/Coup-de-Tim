import Game from '../game/game';
import createElement from '../util/create_element';
import gameControls from './game_controls';
import { removeAllChildNodes, clearDataset } from '../util/dom_nodes_util';
import { backToMenu } from '../navigation/main_menu';
import turnSwitch from './turn_switch';
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
    this.turnStartControls = this.turnStartControls.bind(this);
  }

  turnStartControls() {
    if (this.game.currentPlayer.isComputer) {
      let computerAction = this.game.currentPlayer.decideTurn()
      setTimeout(() => turnSwitch(this.game, computerAction, this.turnSwitchCallback.bind(this)), 1000)
    } else {
      let turnStartControls = gameControls(this.game, this.game.currentPlayer, this.turnSwitchCallback.bind(this));
      this.game.currentPlayer.renderControls(turnStartControls);
    }
  }

  turnSwitchCallback() {
    clearDataset(this.gameRoot);
    this.game.switchTurns();
    this.turnStartControls();
  }
}