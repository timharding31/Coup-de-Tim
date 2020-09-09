import './application.scss';
import createElement from './util/createElement';
import createCard from './util/createCard';
import dukeOptions from './characters/duke';
import assassinOptions from './characters/assassin';
import ambassadorOptions from './characters/ambassador';
import captainOptions from './characters/captain';
import contessaOptions from './characters/contessa';

const header = createElement('h1', { text: 'Coup de Tim' });

const dukeCard = createCard(dukeOptions);
const assassinCard = createCard(assassinOptions);
const ambassadorCard = createCard(ambassadorOptions);
const captainCard = createCard(captainOptions);
const contessaCard = createCard(contessaOptions);

const cards = createElement('div', { class: 'cards-list'}, dukeCard, assassinCard, ambassadorCard, captainCard, contessaCard);

const root = createElement('div', { id: 'root' }, header, cards);

document.body.appendChild(root);