import './application.scss';
import createElement from './util/create_element';
import createCard from './util/create_card';
import dukeOptions from './characters/duke';
import assassinOptions from './characters/assassin';
import ambassadorOptions from './characters/ambassador';
import captainOptions from './characters/captain';
import contessaOptions from './characters/contessa';

import Gameplay from './render/gameplay';
const stucco = require('./images/stucco_texture.png');

import Card from './game/card';

// const dukeCard = createCard(dukeOptions);
// const assassinCard = createCard(assassinOptions);
// const ambassadorCard = createCard(ambassadorOptions);
// const captainCard = createCard(captainOptions);
// const contessaCard = createCard(contessaOptions);

// const cardsList = ['Duke', 'Assassin', 'Ambassador', 'Captain', 'Contessa'].map(character => {
//   let cCard = new Card(character);
//   cCard.flipUp();
//   return cCard.render();
// });

// let fCard = new Card('Duke');
// const faceDownCard = fCard.render();
// cardsList.unshift(faceDownCard);

// const cardInstance = new Card('Captain');
// const dynamicCard = cardInstance.render();

// const cards = createElement('div', { class: 'cards-list' }, ...cardsList);

const root = createElement('div', { id: 'root', style: `background-image: url("${stucco.default}")` });

document.body.appendChild(root);
window.parent.document.body.style.zoom = 0.85;
const g = new Gameplay(root);