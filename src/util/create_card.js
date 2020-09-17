import createElement from './create_element';
const paper = require('../assets/images/paper_texture.png');

export default ({ character, image, symbol, effect, counteraction, brushStroke }, deckCount, idx) => {
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

  const cardTint = createElement('div', {
    class: 'card-tint',
  });

  let cardOpts;
  if (deckCount) {
    let colStart = idx * 3 + 1;
    let colEnd = colStart + 5;
    cardOpts = {
      class: character.toLowerCase(),
      id: 'card',
      style: `background-image: url("${paper.default}");
              grid-row-start: 1;
              grid-column: ${colStart} / ${colEnd};`
    };
  } else {
    cardOpts = {
      class: character.toLowerCase(),
      id: 'card',
      style: `background-image: url("${paper.default}");`,
    };
  }
  const card = createElement('div',
    cardOpts,
    cardTint, characterName, characterImage, characterSymbol, abilities
  );
  return card;
}