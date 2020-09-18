import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';

export default (player) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let form = createElement('form', { class: 'exchange-part-two-form' });
  let header = createElement('p', { text: 'Please select two influences to return to the Court Deck:' });
  form.appendChild(header);
  let submitButton = createElement('button', { text: 'Submit' });
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
      let array = (gameRoot.dataset.exchangeIndices) ? JSON.parse(gameRoot.dataset.exchangeIndices) : [];
      array.push(idx);
      gameRoot.dataset.exchangeIndices = JSON.stringify(array);
    })
  });

  return form;

}