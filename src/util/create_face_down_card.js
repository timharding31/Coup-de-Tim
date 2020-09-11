import createElement from './create_element';
const cardBack = require('../images//brush-stroke/card_back.png');
const intersection = require('../images/intersection_texture.png');

export default (deckCount, idx) => {
  const img = createElement('div', { class: 'card-back', style: `background-image: url("${cardBack.default}");` });
  const headerOne = createElement('h2', { text: 'Coup' });
  const headerTwo = createElement('h2', { text: 'de Tim' });
  const header = createElement('div', { class: 'card-back-header' }, headerOne, headerTwo);
  const tint = createElement('div', {
    class: 'card-tint',
  });
  let card;
  if (deckCount) {
    let colStart = idx * 3 + 1;
    let colEnd = colStart + 5;
    card = createElement('div',
      {
        class: 'face-down',
        id: 'card',
        style: `
          background-image: url("${intersection.default}");
          grid-row-start: 1;
          grid-column: ${colStart} / ${colEnd};
          margin-top: ${5 * Math.random()}px;
          `,
      },
      tint, img, header
    );
  } else {
    card = createElement('div',
      {
        class: 'face-down',
        id: 'card',
        style: `background-image: url("${intersection.default}");`,
      },
      tint, img, header
    );
  }
  return card;
}