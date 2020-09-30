import createElement from '../util/create_element';
import Card from '../game/card';
import * as Text from './text';
import Tutorial from '../components/tutorial';
const intersection = require('../assets/images/intersection_texture.png');
const paper = require('../assets/images/paper_texture.png');
import dukeOptions from '../assets/characters/duke';
import assassinOptions from '../assets/characters/assassin';
import contessaOptions from '../assets/characters/contessa';
import ambassadorOptions from '../assets/characters/ambassador';
import captainOptions from '../assets/characters/captain';

const incomeSymbol = require('../assets/images/symbols/income.png');
const foreignAidSymbol = require('../assets/images/symbols/foreign_aid.png');
const coupSymbol = require('../assets/images/symbols/coup.png');

const characterOptions = [dukeOptions, assassinOptions, ambassadorOptions, captainOptions];
const counterOptions = [dukeOptions, contessaOptions, ambassadorOptions, captainOptions];
const constOptions = [
  { action: 'Income', symbol: incomeSymbol.default, effect: 'Take 1 Coin', backgroundColor: 'rgba(218, 166, 65, 0.5)' },
  { action: 'Foreign Aid', symbol: foreignAidSymbol.default, effect: 'Take 2 Coins', backgroundColor: 'rgba(138, 49, 123, 0.5)' },
  { action: 'Coup', symbol: coupSymbol.default, effect: 'Pay 7 coins to Coup another player', backgroundColor: 'rgba(55, 97, 113, 0.5)' }
];

const characterCards = ['Duke', 'Assassin', 'Ambassador', 'Captain', 'Contessa'].map(character => {
  let card = new Card(character);
  card.flipUp();
  return card.render();
});

const cardHolder = createElement('div', { id: 'all-cards-slide' }, ...characterCards);

const genActionHolder = createElement('table', { id: 'general-actions-slide' }, ...constOptions.map(option => {
  let symbolCell = createElement('td', {
    id: 'symbol-cell',
    style: `background-image: url("${option.symbol}")`,
  });
  let actionCell = createElement('td', { id: 'action-cell', text: option.action })
  let effectCell = createElement('td', { id: 'effect-cell', text: option.effect })
  let tableRow = createElement('tr', { style: `background-color: ${option.backgroundColor}` }, symbolCell, actionCell, effectCell);
  return tableRow
}))

const charActionHolder = createElement('table', { id: 'character-actions-slide' }, ...characterOptions.map(option => {
  let characterCell = createElement('td', { id: 'character-cell', text: option.character })
  let symbolCell = createElement('td', {
    id: 'symbol-cell',
    style: `background-image: url("${option.symbol}")`,
  });
  let actionCell = createElement('td', { id: 'action-cell', text: option.action })
  let effectCell = createElement('td', { id: 'effect-cell', text: option.effect })
  let tableRow = createElement('tr', { style: `background-color: ${option.backgroundColor}` }, characterCell, symbolCell, actionCell, effectCell);
  return tableRow
}));

const charCounterctionHolder = createElement('table', { id: 'character-counteractions-slide' }, ...counterOptions.map(option => {
  let characterCell = createElement('td', { id: 'character-cell', text: option.character })
  let symbolCell = createElement('td', {
    id: 'symbol-cell',
    style: `background-image: url("${option.symbol}")`,
  });
  let counteractionCell = createElement('td', { id: 'counteraction-cell', text: option.counteraction })
  let tableRow = createElement('tr', { style: `background-color: ${option.backgroundColor}` }, characterCell, symbolCell, counteractionCell);
  return tableRow
}));

const introSlide = {
  header: 'Coup de Tim',
  paragraphs: Text.introParagraph,
};

const influenceSlide = {
  header: 'Influence',
  paragraphs: Text.influence,
};

const cardsSlide = {
  header: 'Influence Types',
  body: [cardHolder]
}

const gameplaySlide = {
  header: 'Gameplay',
  paragraphs: Text.gamePlay
}

const actionsSlide = {
  header: 'Actions',
  paragraphs: Text.actionsText,
}

const generalActionsSlide = {
  header: 'General Actions',
  body: [genActionHolder]
}

const characterActionsSlide = {
  header: 'Character Actions',
  body: [charActionHolder]
}

const counteractionsSlide = {
  header: 'Counteractions',
  paragraphs: Text.counteractionsText
}

const characterCounteractionsSlide = {
  header: 'Character Counteractions',
  body: [charCounterctionHolder]
}

const challengesSlide = {
  header: 'Challenges',
  paragraphs: Text.challenges
}

const SLIDES = {
  'intro': introSlide,
  'influence': influenceSlide,
  'cards': cardsSlide,
  'gameplay': gameplaySlide,
  'actions': actionsSlide,
  'general-actions': generalActionsSlide,
  'character-actions': characterActionsSlide,
  'counteractions': counteractionsSlide,
  'character-counteractions': characterCounteractionsSlide,
  'challenges': challengesSlide
}

export default (type) => {

  let slideRoot = document.getElementById('instructions');
  let rootEl = slideRoot.parentNode;
  let prevIdx = Object.keys(SLIDES).indexOf(type) - 1;
  let nextIdx = Object.keys(SLIDES).indexOf(type) + 1;

  let prevSlide = () => {
    let slideRoot = document.getElementById('instructions');
    let allSlides = [...slideRoot.childNodes];
    let that = allSlides[prevIdx + 1];
    that.animate([
      { transform: 'translate(2000px, 0px) scale(0.5)' },
    ], {
      duration: 1000
    });
    allSlides.forEach(slide => {
      slide.classList.remove('visible');
      slide.classList.add('invisible');
    });
    setTimeout(() => {
      allSlides[prevIdx].className = 'visible';
    }, 500);
  }

  let nextSlide = () => {
    let slideRoot = document.getElementById('instructions');
    let allSlides = [...slideRoot.childNodes];
    let that = allSlides[prevIdx + 1];
    that.animate([
      { transform: 'translate(-2000px, 0px) scale(0.5)' },
    ], {
      duration: 1000
    });
    console.log(allSlides)
    allSlides.forEach(slide => {
      slide.classList.remove('visible');
      slide.classList.add('invisible');
    });
    setTimeout(() => {
      allSlides[nextIdx].className = 'visible';
    }, 500);
  }

  if (type === 'intro') {
    prevSlide = () => location.reload()
  }
  if (type === 'challenges') {
    nextSlide = () => {
      let slideRoot = document.getElementById('instructions');
      let allSlides = [...slideRoot.childNodes];
      let lastSlide = allSlides[allSlides.length - 1];
      lastSlide.animate([
        { transform: 'translate(0px, -550px) scale(0.45)' },
      ], {
        duration: 500
      });
      setTimeout(() => new Tutorial(rootEl), 500);
    }
  }

  let header = createElement('h1', { id: 'slide-header', text: SLIDES[type].header });
  let body =[];
  if (SLIDES[type].paragraphs) {
    body = SLIDES[type].paragraphs.map(text => createElement('p', { text }));
  } else if (SLIDES[type].body) {
    body = SLIDES[type].body;
  }
  let slideBackgroundImg = createElement('div', {
    id: 'slide-background-image',
    style: `background-image: url("${intersection.default}")`
  });
  let slideBackgroundTint = createElement('div', { id: 'slide-background-tint' })
  let slideAreaBackground = createElement('div', {
    id: 'slide-area-background',
    style: `background-image: url("${paper.default}")`
  })
  let prevButton = createElement('button', { id: 'prev-slide-button', text: `${(type === 'intro') ? 'Exit' : 'Prev'}`, onClick: () => prevSlide() });
  let nextButton = createElement('button', { id: 'next-slide-button', text: `${(type === 'challenges') ? 'Start Tutorial' : 'Next'}`, onClick: () => nextSlide() });
  let navButtons = createElement('div', { id: 'slide-nav-buttons' }, prevButton, nextButton);
  let spacer = createElement('div', { id: 'slide-spacer' });
  let slideArea = createElement('div', { id: 'slide-area' }, header, ...body, spacer, navButtons);
  let slide = createElement('div', { id: 'slide', class: 'invisible' }, slideBackgroundImg, slideBackgroundTint, slideAreaBackground, slideArea);
  return slide
}