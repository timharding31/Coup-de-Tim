import './application.scss';
import createElement from './util/create_element';
import { MainMenu } from './navigation/main_menu';
const stucco = require('./assets/images/stucco_texture.png');

const root = createElement('div', { id: 'root', style: `background-image: url("${stucco.default}")` });

document.body.appendChild(root);
window.parent.document.body.style.zoom = 0.85;
const g = new MainMenu(root);