import CourtDeck from './court_deck';
import Treasury from './treasury';
import Player from './player';
const moment = require('moment');


export default class Game {
  constructor() {
    this.courtDeck = new CourtDeck();
    this.treasury = new Treasury();
    this.players = [new Player(1, this), new Player(2, this)];
    this.currentPlayer = null;
    this.currentTarget = null;
    this.turnStepOne = this.turnStepOne.bind(this);
    this.turnStepTwo = this.turnStepTwo.bind(this);
    this.turnStepThree = this.turnStepThree.bind(this);
  }

  startGame() {
    this.players.forEach(player => player.setOpponent());
    this.playerOne = this.players[0];
    this.playerTwo = this.players[1];
    this.currentPlayer = this.playerOne;
    this.currentTarget = this.playerTwo;
  }

  switchTurns() {
    this.currentPlayer = this.players[(this.players.indexOf(this.currentPlayer) + 1) % 2];
    this.currentTarget = this.players[(this.players.indexOf(this.currentTarget) + 1) % 2];
  }

  turnStepOne({ action, wasBlocked, wasChallenged }) {
    if (['Income', 'Coup'].includes(action)) return this.turnStepTwo(action);
    if (Boolean(JSON.parse(wasBlocked))) return this.turnStepTwo();
    if (Boolean(JSON.parse(wasChallenged))) {
      let proven = this.currentPlayer.prove(action);
      if (proven) {
        let rand = Math.round(Math.random());
        let lostCard = this.currentTarget.cards[rand];
        this.currentTarget.returnInfluence(rand, true);
        let now = moment().format('h:mm:ss a');
        this.currentTarget.gameLog.push({ time: now, msg: `You lost your ${lostCard.character} due to an unsuccessful challenge` });
        return this.turnStepOne({ action, wasBlocked: false, wasChallenged: false });
      } else {
        return this.turnStepTwo('Lost Challenge');
      }
    }
    return this.turnStepTwo(action);
  }

  turnStepTwo(action) {
    switch(action) {
      case 'Income':
        this.currentPlayer.income();
        this.readyForStepThree = true;
        return action;
      case 'Foreign Aid':
        this.currentPlayer.foreignAid();
        this.readyForStepThree = true;
        return action;
      case 'Coup':
        this.currentPlayer.coup();
        this.readyForStepThree = true;
        return action;
      case 'Tax':
        this.currentPlayer.tax();
        this.readyForStepThree = true;
        return action;
      case 'Assassinate':
        this.currentPlayer.assassinate();
        this.readyForStepThree = true;
        return action;
      case 'Steal':
        this.currentPlayer.steal();
        this.readyForStepThree = true;
        return action;
      case 'Exchange':
        this.currentPlayer.exchangePartOne();
        this.readyForStepThree = true;
        return action;
      default:
        this.readyForStepThree = true;
        return action;
    }
  }

  turnStepThree({ action, idx1, idx2 }) {
    this.readyForStepThree = false;
    switch(action) {
      case 'Exchange':
        this.currentPlayer.exchangePartTwo(Number(idx1), Number(idx2));
        return 'Turn Complete';
      case 'Coup':
        this.currentTarget.receiveCoup(Number(idx1));
        return 'Turn Complete';
      case 'Assassinate':
        this.currentTarget.receiveAssassinate(Number(idx1));
        return 'Turn Complete';
      case 'Steal':
        this.currentTarget.receiveSteal();
        return 'Turn Complete';
      case 'Lost Challenge':
        let lostCard = this.currentPlayer.cards[idx1];
        let now = moment().format('h:mm:ss a');
        this.currentPlayer.returnInfluence(Number(idx1), true);
        this.currentPlayer.gameLog.push({ time: now, msg: `You lost your ${lostCard.character} because your opponent successfully challenged` });
        return 'Turn Complete';
      default:
        return 'Turn Complete';
    }
  }

  gameOver() {
    return ((this.playerOne.cards.length === 0) || (this.playerTwo.cards.length === 0))
  }

  winner() {
    if (this.gameOver()) {
      return [this.playerOne, this.playerTwo].filter(player => player.cards.length > 0)[0];
    } else {
      return null;
    }
  }
}