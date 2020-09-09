import createElement from './createElement';
const paper = require('../images/paper.png');

export default ({ character, image, symbol, effect, counteraction, brushStroke }) => {
  const characterImage = createElement('img', {
    class: 'card-image',
    src: image
  });

  const characterSymbol = createElement('img', {
    class: 'card-symbol',
    src: symbol
  });

  const characterName = createElement('h2', {
    class: 'card-header',
    text: character,
  });

  const characterEffect = effect ? createElement('li', {
    class: 'card-effect',
    text: effect,
  }) : null;

  const characterCounter = counteraction ? createElement('li', {
    class: 'card-counter',
    text: counteraction,
  }) : null;

  const abilities = createElement('ul', {
    class: 'card-abilities',
    style: `background-image: url("${brushStroke}");`,
  }, characterEffect, characterCounter);

  const cardTexture = createElement('div', {
    class: 'card-texture',
    style: `background-image: url("${paper.default}");`,
  });

  const cardTint = createElement('div', {
    class: 'card-tint',
  });

  const card = createElement('div',
    {
      class: character.toLowerCase(),
      id: 'card',
    },
    cardTexture, cardTint, characterName, characterImage, characterSymbol, abilities
  );
  return card;
}