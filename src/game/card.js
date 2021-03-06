import createCard from '../util/create_card';
import createFaceDownCard from '../util/create_face_down_card';

import dukeOptions from '../assets/characters/duke';
import assassinOptions from '../assets/characters/assassin';
import ambassadorOptions from '../assets/characters/ambassador';
import captainOptions from '../assets/characters/captain';
import contessaOptions from '../assets/characters/contessa';

const cardBack = require('../assets/images/brush-stroke/card_back.png');
const paper = require('../assets/images/paper_texture.png');

const renderOptionsMap = {
  Duke: dukeOptions,
  Assassin: assassinOptions,
  Ambassador: ambassadorOptions,
  Captain: captainOptions,
  Contessa: contessaOptions,
}

export default class Card {
  constructor(character) {
    this.faceUp = false;
    this.character = character;
    this.options = renderOptionsMap[character];
    this.action = renderOptionsMap[character].action;
    this.effect = renderOptionsMap[character].effect;
    this.counteraction = renderOptionsMap[character].counteraction;
  }

  flipDown() {
    this.faceUp = false;
  }

  flipUp() {
    this.faceUp = true;
  }

  render(deckCount, idx) {
    if (deckCount) {
      if (this.faceUp) {
        return createCard(this.options, deckCount, idx);
      } else {
        return createFaceDownCard(deckCount, idx);
      }
    } else {
      if (this.faceUp) {
        return createCard(this.options);
      } else {
        return createFaceDownCard();
      }
    }
  }
}