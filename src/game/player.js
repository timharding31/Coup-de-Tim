export default class Player {
  constructor(idx, game) {
    this.idx = idx;
    this.game = game;
    this.opponent = null;
    this.cards = game.courtDeck.deal(2);
    this.coins = game.treasury.dispense(2);
  }

  setOpponent() {
    this.opponent = this.game.players[(this.idx + 1) % 2];
  }

  returnInfleunce(idx, dead = true) {
    let lostCard = this.cards[idx];
    this.cards = [...this.cards.slice(0, idx), ...this.cards.slice(idx + 1)];
    if (dead) {
      this.game.faceUpCards.push(lostCard);
    } else {
      this.game.courtDeck.returnCard(lostCard);
    }
  }

  pay(num) {
    this.coins -= this.game.treasury.collect(num);
  }

  block() {
    return true;
  }

  challenge() {
    return true;
  }

  prove(action) {
    let proven;
    const handIndex = this.cards.map(card => card.action).indexOf(action);
    if (handIndex > -1) {
      proven = true;
      this.returnInfleunce(handIndex, false);
      this.cards = [...this.cards, ...this.game.courtDeck.deal(1)];
    } else {
      proven = false;
    }
    return proven;
  }

  income() {
    this.coins += this.game.treasury.dispense(1);
  }


  foreignAid() {
    this.coins += this.game.treasury.dispense(2);
  }

  coup() {
    this.coins -= this.game.treasury.collect(7);
  }

  receiveCoup(idx) {
    this.returnInfleunce(idx, true);
  }

  tax() {
    this.coins += this.game.treasury.dispense(3);
  }

  assassinate() {
    this.coins -= this.game.treasury.collect(3);
  }

  receiveAssassinate(idx) {
    this.returnInfleunce(idx, true);
  }

  steal() {
    this.coins += Math.min(2, this.opponent.coins);
  }

  receiveSteal() {
    this.coins -= Math.min(2, this.coins);
  }

  exchangePartOne() {
    this.cards = [...this.cards, ...this.game.courtDeck.deal(2)];
  }

  exchangePartTwo(idx1, idx2) {
    this.returnInfleunce(idx1, false);
    this.returnInfleunce(idx2, false);
  }
}