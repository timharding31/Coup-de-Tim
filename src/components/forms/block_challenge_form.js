import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';
const greenBrushstroke = require('../../assets/images/brush-stroke/ambassador.png');
const redBrushstroke = require('../../assets/images/brush-stroke/contessa.png');
const purpleBrushstroke = require('../../assets/images/brush-stroke/duke.png');
const blueBrushstroke = require('../../assets/images/brush-stroke/captain.png');
const blackBrushstroke = require('../../assets/images/brush-stroke/assassin.png');
const paper = require('../../assets/images/paper_texture.png');

export default (action, blockable, challengeable) => {
  let gameRoot = document.getElementById('game');
  clearDataset(gameRoot);
  let recipient = (action === 'Block') ? 'target' : 'player';
  let formTint = createElement('div', { id: 'form-tint' });
  let form = createElement('form', { class: 'block-challenge-form', style: `background-image: url("${paper.default}");` }, formTint);

  let blockButtonBackground;
  switch(action) {
    case 'Steal':
      blockButtonBackground = blueBrushstroke.default;
      break
    case 'Assassinate':
      blockButtonBackground = redBrushstroke.default;
      break
    case 'Foreign Aid':
      blockButtonBackground = purpleBrushstroke.default;
      break
    default:
      blockButtonBackground = null;
      break
  }

  let allowButton = createElement(
    'button',
    {
      id: 'allow',
      text: 'Allow',
      style: `background-image: url('${greenBrushstroke.default}')`,
      type: 'submit',
      // onClick: () => document.forms['block-challenge-form'].submit(),
    }
  );
  let blockButton;
  let challengeButton;
  let buttons = [allowButton];
  if (challengeable) {
    challengeButton = createElement(
      'button',
      {
        id: 'challenge',
        text: 'Challenge',
        type: 'submit',
        style: `background-image: url('${blackBrushstroke.default}')`,
        onClick: () => gameRoot.setAttribute(`data-${recipient}-was-challenged`, true)
      }
    );
    buttons.unshift(challengeButton);
  }
  if (blockable) {
    blockButton = createElement(
      'button',
      {
        id: 'block',
        text: 'Block',
        type: 'submit',
        style: `background-image: url('${blockButtonBackground}')`,
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