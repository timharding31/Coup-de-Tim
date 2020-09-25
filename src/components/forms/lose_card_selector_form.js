import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';
const redBrushstroke = require('../../assets/images/brush-stroke/contessa.png');

export default (cause, player) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let form = createElement('form', { class: 'lose-challenge-form' });
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
      style: `background-image: ${redBrushstroke.default}`
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
      card.classList.toggle('selected');
      gameRoot.dataset.killIdx = idx;
    })
  });

  // [header, submitButton].forEach(el => form.appendChild(el));

  return form;

}