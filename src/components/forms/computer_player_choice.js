import createElement from '../../util/create_element';
import { clearDataset } from '../../util/dom_nodes_util';
const greenBrushstroke = require('../../assets/images/brush-stroke/ambassador.png');
const redBrushstroke = require('../../assets/images/brush-stroke/contessa.png');
const purpleBrushstroke = require('../../assets/images/brush-stroke/duke.png');
const blueBrushstroke = require('../../assets/images/brush-stroke/captain.png');
const blackBrushstroke = require('../../assets/images/brush-stroke/assassin.png');
const paper = require('../../assets/images/paper_texture.png');

export default (action) => {
  let message = createElement('h2', { text: action })
  let div = createElement('div', { class: 'computer-chocie' }, message);
  return div
}