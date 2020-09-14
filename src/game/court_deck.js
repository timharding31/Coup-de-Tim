import Card from './card';
import createElement from '../util/create_element';
import createCard from '../util/create_card';

export default class CourtDeck {
  constructor() {
    this.deck = this.buildDeck();
    this.shuffle();
    this.faceUpCards = [];
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
    // let renderedUpCards;
    // if (this.faceUpCards.length) {
    //   this.faceUpCards.forEach(card => card.flipUp());
    //   renderedUpCards = createElement('div', { class: 'discard-pile' }, ...this.faceUpCards.map(card => card.render()));
    // }
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
    let renderedUpCards;
    let faceUpCount = this.faceUpCards.length;
    if (faceUpCount) {
      this.faceUpCards.forEach(card => card.flipUp());
      renderedUpCards = createElement('div',
        {
          class: 'discard-pile',
          style: `
          display: grid;
          grid-template-columns: repeat(${(faceUpCount + 1) * 3}, 80px);
          grid-template-rows: 168px;
          max-width: ${((deckCount + 1) * 3)}px;
        `
        }
        , ...this.faceUpCards.map((card, idx) => card.render(faceUpCount, idx))
      );
    }
    let renderedAllCards = createElement('div', { class: 'all-cards' }, renderedCourtDeck);
    if (renderedUpCards) renderedAllCards.appendChild(renderedUpCards);
    return renderedAllCards;
  }
}