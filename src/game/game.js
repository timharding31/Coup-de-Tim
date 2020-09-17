import CourtDeck from './court_deck';
import Treasury from './treasury';
import Player from './player';


export default class Game {
  constructor({ gameRoot, playerRoots, courtDeckRoot, treasuryRoot }) {
    this.rootEl = gameRoot;
    this.courtDeck = new CourtDeck(courtDeckRoot);
    this.treasury = new Treasury(treasuryRoot);
    this.players = [];
    [1,2].forEach((playerIdx, rootIdx) => {
      let player = new Player(playerRoots[rootIdx], playerIdx, this);
      this.players.push(player);
    });
    this.currentPlayer = null;
    this.currentTarget = null;
    this.gameOver = false;
    this.winner = null;
    this.started = false;

    this.switchTurns = this.switchTurns.bind(this);
    this.startGame = this.startGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.render = this.render.bind(this);
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
  }

  render() {
    this.currentPlayer.flipAllCardsUp();
    this.currentTarget.flipAllCardsDown();
    this.courtDeck.render();
    this.treasury.render();
    this.playerOne.render();
    this.playerTwo.render();
  }
}