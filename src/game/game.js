import CourtDeck from './court_deck';
import Treasury from './treasury';
import Player from './player';
import createElement from '../util/create_element';
import Gameplay from '../components/gameplay';
import ComputerPlayer from './computer_player';
import computerPlayerMessage from '../components/forms_tips/computer_player_message';
const paper = require('../assets/images/paper_texture.png');


export default class Game {
  constructor({ gameRoot, playerRoots, courtDeckRoot, treasuryRoot }) {
    this.rootsObject = { gameRoot, playerRoots, courtDeckRoot, treasuryRoot };
    this.rootEl = gameRoot;
    this.courtDeck = new CourtDeck(courtDeckRoot);
    this.treasury = new Treasury(treasuryRoot);
    let computerPlayer = new ComputerPlayer(playerRoots[0], 1, this);
    let humanPlayer = new Player(playerRoots[1], 2, this);
    this.players = [computerPlayer, humanPlayer];
    this.currentPlayer = null;
    this.currentTarget = null;
    this.gameOver = false;
    this.winner = null;
    this.started = false;

    this.switchTurns = this.switchTurns.bind(this);
    this.startGame = this.startGame.bind(this);
    this.render = this.render.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
  }

  startGame() {
    this.players.forEach(player => player.setOpponent());
    this.playerOne = this.players[0];
    this.playerTwo = this.players[1];
    this.currentPlayer = this.playerTwo;
    this.currentTarget = this.playerOne;
    this.started = true;
    this.render();
  }

  switchTurns() {
    this.currentPlayer = this.players[(this.players.indexOf(this.currentPlayer) + 1) % 2];
    this.currentTarget = this.players[(this.players.indexOf(this.currentTarget) + 1) % 2];
    this.render();
  }

  restartGame() {
    let parentEl = this.rootEl.parentNode
    new Gameplay(parentEl);
  }

  exitGame() {
    location.reload();
  }

  render() {
    this.gameOver = Boolean((this.playerOne.cards.length === 0) || (this.playerTwo.cards.length === 0));
    this.winner = [this.playerOne, this.playerTwo].filter(player => player.cards.length > 0)[0];
    this.courtDeck.render();
    this.treasury.render();
    this.playerOne.render();
    this.playerTwo.render();
    if (this.gameOver) {
      let background = createElement('div', { id: 'game-over-background', style: `background-image: url("${paper.default}")`})
      let header = createElement('div', { class: 'game-over-header' },
        ...[`${this.winner.isComputer ? 'You lost!' : 'You won!'}`, 'Would you like to play again?']
          .map(msg => createElement('p', { text: msg }))
      );
      let restartButton = createElement('button', { text: 'Restart', type: 'button', onClick: this.restartGame })
      let exitButton = createElement('button', { text: 'Exit', type: 'button', onClick: this.exitGame })
      let gameOverMessage = createElement('div', { id: 'game-over' }, background, header, restartButton, exitButton);
      let winnerTxt = computerPlayerMessage('Winner');
      let loserTxt = computerPlayerMessage('Loser');
      if (this.winner.isComputer) {
        this.winner.flipAllCardsUp();
        this.winner.render();
      }
      setTimeout(() => {
        this.winner.renderControls(winnerTxt);
        this.winner.opponent.renderControls(loserTxt);
      }, 10);
      this.rootEl.appendChild(gameOverMessage);
    }
  }
}