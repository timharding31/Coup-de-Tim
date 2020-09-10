import createCard from '../util/create_card';
import createFaceDownCard from '../util/create_face_down_card';

import dukeOptions from '../characters/duke';
import assassinOptions from '../characters/assassin';
import ambassadorOptions from '../characters/ambassador';
import captainOptions from '../characters/captain';
import contessaOptions from '../characters/contessa';

const cardBack = require('../images//brush-stroke/card_back.png');
const paper = require('../images/paper_texture.png');

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

  render() {
    if (this.faceUp) {
      return createCard(this.options);
    } else {
      return createFaceDownCard();
    }
  }
}