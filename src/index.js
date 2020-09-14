import './application.scss';
import createElement from './util/create_element';

import Gameplay from './render/gameplay';
const stucco = require('./images/stucco_texture.png');

import Card from './game/card';

const root = createElement('div', { id: 'root', style: `background-image: url("${stucco.default}")` });

document.body.appendChild(root);
window.parent.document.body.style.zoom = 0.85;
const g = new Gameplay(root);