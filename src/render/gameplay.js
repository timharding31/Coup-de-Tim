import Game from '../game/game';
import createElement from '../util/create_element';
import coinArray from '../util/coin_array';

export default class Gameplay {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.game = new Game();
    this.game.startGame();

    this.render();
  }

  renderCourt() {
    return createElement('div', { class: 'court' }, this.game.courtDeck.render(), this.game.treasury.render());
  }

  renderCurrentPlayer() {
    return createElement('div',
        { class: 'current-player-station' },
        ...this.game.currentPlayer.render()
    );
  }

  renderCurrentTarget() {
    return createElement('div',
      { class: 'target-player-station' },
      ...this.game.currentTarget.render()
    );
  }


  render() {
    this.rootEl.innerHTML = '';
    this.rootEl.appendChild(createElement('div',
      { id: 'game' },
      this.renderCurrentTarget(), this.renderCourt(), this.renderCurrentPlayer()
    ));
  }


}