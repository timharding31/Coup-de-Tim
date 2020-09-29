import createElement from '../util/create_element';
import createFaceDownCard from '../util/create_face_down_card';
import Gameplay from '../components/gameplay';
import { removeAllChildNodes } from '../util/dom_nodes_util';
const cardBack = require('../assets/images/intersection_texture.png');
const upArrow = require('../assets/images/up_arrow.png');
import Tutorial from '../components/tutorial';

export class MainMenu {
  constructor(rootEl) {
    this.rootEl = rootEl;
    removeAllChildNodes(rootEl);
    this.cardMenu = createFaceDownCard();
    this.cardMenu.setAttribute('id', 'main-menu');
    let startButton = createElement('button', { id: 'start-game', text: 'Start Game', onClick: this.startGame.bind(this) })
    let tutorialButton = createElement('button', { id: 'start-tutorial', text: 'Tutorial', onClick: this.startTutorial.bind(this) })
    let instructions = createElement('a', { href: 'https://boardgamegeek.com/boardgame/131357/coup', target: '_blank', text: '<button>How To Play</button>' })
    let buttons = createElement('div', { class: 'main-menu-buttons' }, startButton, tutorialButton, instructions);
    this.cardMenu.appendChild(buttons);
    this.rootEl.appendChild(this.cardMenu);
  }

  startGame() {
    this.cardMenu.animate([
      { transform: 'translate(0px, -800px)' },
    ], {
      duration: 600
    });
    setTimeout(() => new Gameplay(this.rootEl), 600);
  }

  startTutorial() {
    this.cardMenu.animate([
      { transform: 'translate(0px, -800px)' },
    ], {
      duration: 600
    });
    setTimeout(() => new Tutorial(this.rootEl), 600);
  }
}

export const backToMenu = (rootEl) => {
  const img = createElement('div', { class: 'card-back', style: `background-image: url("${cardBack.default}");` });
  const tint = createElement('div', {
    class: 'card-tint',
  });
  const icon = createElement('div', { style: `background-image: url("${upArrow.default}")`, class: 'nav-icon' });

  const overlap = createElement('div', { id: 'back-to-menu', onClick: () => new MainMenu(rootEl) }, img, tint, icon);
  return overlap;
}