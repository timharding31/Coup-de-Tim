import CourtDeck from './court_deck';
import Treasury from './treasury';
import Player from './player';


export default class Game {
  constructor() {
    this.courtDeck = new CourtDeck();
    this.treasury = new Treasury();
    this.players = [];
    this.currentPlayer = null;
    this.currentTarget = null;
  }

  startGame() {
    this.players = [new Player(0, this), new Player(1, this)];
    this.players.forEach(player => player.setOpponent());
    this.currentPlayer = this.players[0];
    this.currentTarget = this.players[1];
    this.currentPlayer.cards.forEach(card => card.flipUp());
  }

  switchTurns() {
    this.currentPlayer = this.players[this.players.indexOf(this.currentPlayer) + 1 % 2];
    this.currentTarget = this.players[this.players.indexOf(this.currentTarget) + 1 % 2];
  }

  turnStepOne(action, { wasBlocked, wasChallenged }) {
    if (['Income', 'Coup'].includes(action)) return action;
    if (wasBlocked) return;
    if (wasChallenged) {
      let proven = this.currentPlayer.prove(action);
      if (proven) {
        return action;
      } else {
        return;
      }
    }
  }

  turnStepTwo(action) {
    switch(action) {
      case 'Income':
        this.currentPlayer.income();
        return action;
      case 'Foreign Aid':
        this.currentPlayer.foreignAid();
        return action;
      case 'Coup':
        this.currentPlayer.coup();
        // this.promptKillIndex()
        //   .then(idx => this.currentTarget.receiveCoup(idx));
        return action;
      case 'Tax':
        this.currentPlayer.tax();
        return action;
      case 'Assassinate':
        this.currentPlayer.assassinate();
        // this.promptKillIndex()
        //   .then(idx => this.currentTarget.receiveAssassinate(idx));
        return action;
      case 'Steal':
        this.currentPlayer.steal();
        this.currentTarget.receiveSteal();
        return action;
      case 'Exchange':
        this.currentPlayer.exchangePartOne();
        // this.promptExchangeIndices()
        //   .then(([idx1, idx2]) => this.currentPlayer.exchangePartTwo(idx1, idx2));
        return action;
      default:
        return action;
    }
  }

  turnStepThree(action, { idx1, idx2 }) {
    switch(action) {
      case 'Exchange':
        this.currentPlayer.exchangePartTwo(idx1, idx2);
        return;
      case 'Coup':
        this.currentTarget.receiveCoup(idx1);
        return;
      case 'Assassinate':
        this.currentTarget.receiveAssassinate(idx1);
        return;
      case 'Steal':
        this.currentTarget.receiveSteal();
        return;
      default:
        return;
    }
  }

  gameOver() {
    return ((this.currentPlayer.cards.length === 0) || (this.currentTarget.cards.length === 0))
  }

  winner() {
    if (this.gameOver()) {
      return this.players.filter(player => player.coins.length > 0)[0];
    } else {
      return null;
    }
  }
}