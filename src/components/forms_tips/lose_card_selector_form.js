import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';
const redBrushstroke = require('../../assets/images/brush-stroke/contessa.png');
const paper = require('../../assets/images/paper_texture.png');

export default (cause, player) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let formTint = createElement('div', { id: 'form-tint' });
  let form = createElement('form', { class: 'lose-challenge-form', style: `background-image: url("${paper.default}");` }, formTint);
  let header;
  if (cause === 'challenge') {
    header = createElement('p', { text: 'You have lost a challenge, you must select an influence to Lose:' });
  } else {
    header = createElement('p', { text: 'Your oppoenent\'s action was successful, you must select an influence to Lose:' });
  }
  form.appendChild(header);
  let submitButton = createElement(
    'button',
    {
      text: 'Submit',
      style: `background-image: url('${redBrushstroke.default}')`,
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
    card.classList.toggle('selectable');
    card.addEventListener('click', (e) => {
      e.preventDefault();
      if (card.classList.contains('selected')) {
        gameRoot.removeAttribute('data-kill-idx');
        submitButton.setAttribute('disabled', 'disabled');
      } else {
        submitButton.removeAttribute('disabled');
        gameRoot.dataset.killIdx = idx;
      }
      card.classList.toggle('selected');
    })
  });

  // [header, submitButton].forEach(el => form.appendChild(el));

  return form;

}