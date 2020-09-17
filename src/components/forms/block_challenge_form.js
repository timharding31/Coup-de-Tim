import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';

export default (action, blockable, challengeable) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let recipient = (action === 'Block') ? 'target' : 'player';
  let form = createElement('form', { class: 'block-challenge-form' });

  let allowButton = createElement('button', { id: 'allow', text: 'Allow', type: 'submit' });
  let blockButton;
  let challengeButton;
  let buttons = [allowButton];
  if (challengeable) {
    challengeButton = createElement('button',
      {
        id: 'challenge',
        text: 'Challenge',
        type: 'submit',
        onClick: () => gameRoot.setAttribute(`data-${recipient}-was-challenged`, true)
      }
    );
    buttons.unshift(challengeButton);
  }
  if (blockable) {
    blockButton = createElement('button',
      {
        id: 'block',
        text: 'Block',
        type: 'submit',
        onClick: () => gameRoot.setAttribute(`data-${recipient}-was-blocked`, true)
      }
    );
    buttons.unshift(blockButton);
  }

  let header = createElement('p', { text: `Your opponent has elected to ${action.toUpperCase()}` });
  let subHeader = createElement('p', { text: 'How will you respond?' });
  let buttonContainer = createElement('div', { class: 'response-buttons' }, ...buttons);

  [header, subHeader, buttonContainer].forEach(el => form.appendChild(el));

  return form;
}