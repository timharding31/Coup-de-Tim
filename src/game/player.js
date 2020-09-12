import createCoin from '../util/create_coin';
import createElement from '../util/create_element';
const moment = require('moment');

export default class Player {
  constructor(idx, game) {
    this.idx = idx;
    this.game = game;
    this.opponent = null;
    this.cards = game.courtDeck.deal(2);
    this.coins = game.treasury.dispense(2);
    let now = moment().format('h:mm:ss a');
    this.gameLog = [{ time: now, msg: 'Welcome to Coup de Tim! Come back here later to view a helpful game log' }];
  }

  setOpponent() {
    this.opponent = this.game.players[(this.idx) % 2];
  }

  flipAllCardsUp() {
    this.cards.forEach(card => card.flipUp());
  }

  flipAllCardsDown() {
    this.cards.forEach(card => card.flipDown());
  }

  returnInfluence(idx, dead = true) {
    let lostCard = this.cards[idx];
    this.cards = [...this.cards.slice(0, idx), ...this.cards.slice(idx + 1)];
    if (dead) {
      this.game.courtDeck.faceUpCards.push(lostCard);
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
      let returnedCard = this.cards[handIndex];
      this.returnInfluence(handIndex, false);
      this.cards = [...this.cards, ...this.game.courtDeck.deal(1)];
      let now = moment().format('h:mm:ss a');
      this.gameLog.push({ time: now, msg: `You received a new card after your opponent challenged your ${returnedCard.character}` });
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
    this.returnInfluence(idx, true);
  }

  tax() {
    this.coins += this.game.treasury.dispense(3);
  }

  assassinate() {
    this.coins -= this.game.treasury.collect(3);
  }

  receiveAssassinate(idx) {
    this.returnInfluence(idx, true);
  }

  steal() {
    this.coins += Math.min(2, this.opponent.coins);
  }

  receiveSteal() {
    this.coins -= Math.min(2, this.coins);
  }

  exchangePartOne() {
    this.cards = this.cards.concat(this.game.courtDeck.deal(2));
  }

  exchangePartTwo(idx1, idx2) {
    const [sortedIdx1, sortedIdx2] = [idx1, idx2].sort();
    let card1 = this.cards[sortedIdx1];
    let card2 = this.cards[sortedIdx2];
    [card1, card2].forEach(card => this.game.courtDeck.returnCard(card));
    this.cards = [...this.cards.slice(0, sortedIdx1), ...this.cards.slice(sortedIdx1 + 1, sortedIdx2), ...this.cards.slice(sortedIdx2 + 1)]
  }

  render() {
    let playerName = createElement('div',
      {
        class: 'player-name',
        text: `<h1>Player ${this.idx === 1 ? 'One' : 'Two'}</h2>`,
      }
    );
    let hand = createElement('div',
      { class: 'player-cards' },
      ...this.cards.map(card => card.render())
    );
    let coinsArray = new Array(this.coins).fill(1).map(_ => createCoin());
    let coins = createElement('div',
      { class: 'player-coins' },
      ...coinsArray
    );
    let messages = this.gameLog.map(message => createElement('li', { text: `<p>Time: ${message.time}</p><p>${message.msg}</p>`}))
    let messageList = createElement('ul', { class: 'game-log' }, ...messages);
    let messageTrigger = createElement('div', { class: 'game-log-hover-trigger' }, messageList);
    playerName.appendChild(messageTrigger);
    return [playerName, hand, coins];
  }
}