import CourtDeck from './court_deck';
import Treasury from './treasury';
import Player from './player';
import createElement from '../util/create_element';
import { removeAllChildNodes } from '../util/dom_nodes_util';
import ComputerPlayer from './computer_player';


export default class Game {
  constructor({ gameRoot, playerRoots, courtDeckRoot, treasuryRoot }) {
    this.rootsObject = { gameRoot, playerRoots, courtDeckRoot, treasuryRoot };
    this.rootEl = gameRoot;
    this.courtDeck = new CourtDeck(courtDeckRoot);
    this.treasury = new Treasury(treasuryRoot);
    let playerOne = new Player(playerRoots[0], 1, this);
    let playerTwo = new ComputerPlayer(playerRoots[1], 2, this);
    this.players = [playerOne, playerTwo];
    // [1,2].forEach((playerIdx, rootIdx) => {
    //   let player = new Player(playerRoots[rootIdx], playerIdx, this);
    //   this.players.push(player);
    // });
    this.currentPlayer = null;
    this.currentTarget = null;
    this.gameOver = false;
    this.winner = null;
    this.started = false;

    this.switchTurns = this.switchTurns.bind(this);
    this.startGame = this.startGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.render = this.render.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
  }

  startGame() {
    this.players.forEach(player => player.setOpponent());
    this.playerOne = this.players[0];
    this.playerTwo = this.players[1];
    this.currentPlayer = this.playerOne;
    this.currentTarget = this.playerTwo;
    this.started = true;
    this.currentPlayer.flipAllCardsUp();
    this.render();
  }

  switchTurns() {
    this.currentPlayer = this.players[(this.players.indexOf(this.currentPlayer) + 1) % 2];
    this.currentTarget = this.players[(this.players.indexOf(this.currentTarget) + 1) % 2];
    this.currentPlayer.flipAllCardsUp();
    this.currentTarget.flipAllCardsDown();
    this.render();
  }

  checkWinner() {
    this.gameOver = Boolean((this.playerOne.cards.length === 0) || (this.playerTwo.cards.length === 0));
    this.winner = [this.playerOne, this.playerTwo].filter(player => player.cards.length > 0)[0];
    if (this.gameOver) {
      let header = createElement('div', { class: 'game-over-header' },
        ...[`Player ${this.winner.idx === 1 ? 'One' : 'Two'} is the winner!`, 'Would you like to play again?']
          .map(msg => createElement('p', { text: msg }))
      );
      let gameOverMessage = createElement('div', { id: 'game-over' }, header);
      this.rootEl.appendChild(gameOverMessage);
    }
  }

  restartGame() {
    console.log(here);
    removeAllChildNodes(this.rootEl);
    new Game(this.rootsObject);
  }

  exitGame() {
    location.reload();
  }

  render() {
    this.checkWinner();
    this.currentPlayer.flipAllCardsUp();
    this.currentTarget.flipAllCardsDown();
    this.courtDeck.render();
    this.treasury.render();
    this.playerOne.render();
    this.playerTwo.render();
  }
}