import createElement from './util/create_element';
import createFaceDownCard from './util/create_face_down_card';
import Gameplay from './render/gameplay';

export default class MainMenu {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.cardMenu = createFaceDownCard();
    this.cardMenu.setAttribute('id', 'main-menu');
    let startButton = createElement('button', { id: 'start-game', text: 'Start Game', onClick: this.startGame.bind(this) })
    let instructions = createElement('a', { href: 'https://boardgamegeek.com/boardgame/131357/coup', target: '_blank', text: '<button>How To Play</button>' })
    let buttons = createElement('div', { class: 'main-menu-buttons' }, startButton, instructions);
    this.cardMenu.appendChild(buttons);
    this.rootEl.appendChild(this.cardMenu);
  }

  startGame() {
    this.cardMenu.animate([
      { transform: 'translate(0px, -1000px)' },
    ], {
      duration: 800
    });
    setTimeout(() => this.cardMenu.remove(), 800);
    setTimeout(() => new Gameplay(this.rootEl), 600);
  }
}