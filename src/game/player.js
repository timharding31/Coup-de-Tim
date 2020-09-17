import createCoin from '../util/create_coin';
import createElement from '../util/create_element';
import { removeAllChildNodes } from '../util/dom_nodes_util';

export default class Player {
  constructor(rootEl, idx, game) {
    this.rootEl = rootEl;
    this.idx = idx;
    this.game = game;
    this.opponent = null;
    this.cards = game.courtDeck.deal(2);
    this.coins = game.treasury.dispense(2);
    this.upCards = [];

    this.setOpponent = this.setOpponent.bind(this);
    this.flipAllCardsUp = this.flipAllCardsUp.bind(this);
    this.flipAllCardsDown = this.flipAllCardsDown.bind(this);
    this.payCoins = this.payCoins.bind(this);
    this.receiveCoins = this.receiveCoins.bind(this);
    this.stealCoins = this.stealCoins.bind(this);
    this.loseCoins = this.loseCoins.bind(this);
    this.loseCard = this.loseCard.bind(this);
    this.reshuffleCard = this.reshuffleCard.bind(this);
    this.exchangePartOne = this.exchangePartOne.bind(this);
    this.exchangePartTwo = this.exchangePartTwo.bind(this);
    this.prove = this.prove.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.render = this.render.bind(this);
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

  payCoins(num) {
    this.coins -= this.game.treasury.collect(num);
    this.render();
  }

  receiveCoins(num) {
    this.coins += this.game.treasury.dispense(num);
    this.render();
  }

  stealCoins(num) {
    this.coins += Math.min(num, this.opponent.coins);
    this.render();
  }

  loseCoins(num) {
    this.coins -= Math.min(num, this.coins);
    this.render();
  }

  loseCard(idx) {
    let lostCard = this.cards[idx];
    this.cards = this.cards.filter((_, i) => (i != idx));
    lostCard.flipUp();
    this.upCards.push(lostCard);
    this.render();
  }

  reshuffleCard(idx) {
    let reshuffledCard = this.cards[idx];
    this.cards = this.cards.filter((_, i) => (i != idx));
    this.game.courtDeck.returnCard(reshuffledCard);
    this.cards = this.cards.concat(this.game.courtDeck.deal(1));
    this.render();
  }

  exchangePartOne() {
    this.cards = this.cards.concat(this.game.courtDeck.deal(2));
    this.flipAllCardsUp();
    this.render();
  }

  exchangePartTwo(idx1, idx2) {
    this.cards = this.cards.filter((_, i) => (i != idx1 && i != idx2));
    this.render();
  }

  prove(character) {
    return this.cards.map(card => card.character).indexOf(character);
  }

  renderControls(newControls) {
    let controls = this.rootEl.childNodes[0];
    removeAllChildNodes(controls);
    controls.appendChild(newControls);
  }

  render() {
    let playerControls = createElement('div', { id: 'player-controls' });
    let hand = createElement('div',
      { id: 'player-cards' },
      ...this.cards.map(card => card.render())
    );
    let discardPile = createElement('div', { id: 'discard-pile' });
    if (this.upCards.length > 0) {
      this.upCards.forEach(card => {
        card.flipUp();
        let renderedCard = card.render();
        discardPile.appendChild(renderedCard);
      });
    }
    let coinsArray = new Array(this.coins).fill(1).map(_ => createCoin());
    let coins = createElement('div',
      { id: 'player-coins' },
      ...coinsArray
    );
    removeAllChildNodes(this.rootEl);
    [playerControls, coins, hand, discardPile].forEach(newEl => {
      this.rootEl.appendChild(newEl);
    });
  }
}