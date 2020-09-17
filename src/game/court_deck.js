import Card from './card';
import createElement from '../util/create_element';
import { removeAllChildNodes } from '../util/dom_nodes_util';

export default class CourtDeck {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.deck = this.buildDeck();
    this.shuffle();
    this.faceUpCards = [];

    this.shuffle = this.shuffle.bind(this);
    this.deal = this.deal.bind(this);
    this.returnCard = this.returnCard.bind(this);
    this.render = this.render.bind(this);
  }

  buildDeck()  {
    let deck = [];
    ['Duke', 'Assassin', 'Ambassador', 'Captain', 'Contessa'].forEach(character => {
      [1,2,3].forEach(_ => {
        let newCard = new Card (character);
        deck.push(newCard);
      })
    });
    return deck;
  }

  shuffle()  {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    this.render();
  }

  deal(num) {
    const dealtCards = this.deck.slice(0, num);
    this.deck = this.deck.slice(num);
    this.shuffle();
    return dealtCards;
  }

  returnCard(card) {
    this.deck.push(card);
    this.shuffle();
  }

  render() {
    removeAllChildNodes(this.rootEl);
    this.deck.forEach(card => card.flipDown());
    let deckCount = this.deck.length;
    let renderedCourtDeck = createElement('div',
      {
        class: 'court-deck',
        style: `
          display: grid;
          grid-template-columns: repeat(${(deckCount + 1) * 3}, 2px);
          grid-template-rows: 336px;
          max-width: ${((deckCount + 1) * 3)}px;
        `
      }
      , ...this.deck.map((card, idx) => card.render(deckCount, idx))
    );
    this.rootEl.appendChild(renderedCourtDeck);
  }
}