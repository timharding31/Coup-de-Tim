import createElement from './create_element';
const cardBack = require('../images//brush-stroke/card_back.png');
const intersection = require('../images/intersection_texture.png');

export default () => {
  const img = createElement('div', { class: 'card-back', style: `background-image: url("${cardBack.default}");` });
  const headerOne = createElement('h2', { text: 'Coup' });
  const headerTwo = createElement('h2', { text: 'de Tim' });
  const header = createElement('div', { class: 'card-back-header' }, headerOne, headerTwo);
  const tint = createElement('div', {
    class: 'card-tint',
  });
  const card = createElement('div',
    {
      class: 'face-down',
      id: 'card',
      style: `background-image: url("${intersection.default}");`,
    },
    tint, img, header
  );
  return card;
}