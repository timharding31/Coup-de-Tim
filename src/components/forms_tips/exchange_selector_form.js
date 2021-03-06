import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';
const greenBrushstroke = require('../../assets/images/brush-stroke/ambassador.png');
const paper = require('../../assets/images/paper_texture.png');

export default (player) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let formTint = createElement('div', { id: 'form-tint' });
  let form = createElement('form', { class: 'exchange-part-two-form', style: `background-image: url("${paper.default}");` }, formTint);
  let header = createElement('p', { text: 'Please select two influences to return to the Court Deck:' });
  form.appendChild(header);
  let submitButton = createElement(
    'button',
    {
      text: 'Submit',
      style: `background-image: url('${greenBrushstroke.default}')`,
      disabled: 'disabled'
    }
  );
  form.appendChild(submitButton);

  let area;
  if (player.idx === 1) {
    area = document.getElementById('player-one');
  } else {
    area = document.getElementById('player-two');
  }

  let cards = [...area.childNodes[2].childNodes];

  cards.forEach((card, idx) => {
    card.classList.toggle('exchangeable');
    card.addEventListener('click', (e) => {
      e.preventDefault();
      let array = (gameRoot.dataset.exchangeIndices) ? JSON.parse(gameRoot.dataset.exchangeIndices) : [];
      if (!card.classList.contains('exchanged')) array.push(idx);
      while (array.length > 2) {
        array = array.slice(1);
      }
      card.classList.toggle('exchanged');
      gameRoot.dataset.exchangeIndices = JSON.stringify(array);
      if (array.length === 2) {
        submitButton.removeAttribute('disabled');
      }
    })
  });

  return form;

}