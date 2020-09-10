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
    const currentPlayerHand = createElement('div',
      { class: 'current-player-hand' },
      ...this.game.currentPlayer.cards.map(card => card.render())
    );
    const currentPlayerCoins = createElement('div',
      { class: 'current-player-coins' },
      ...coinArray.slice(0, this.game.currentPlayer.coins)
    );
    return createElement('div',
        { class: 'current-player-station' },
        currentPlayerHand, currentPlayerCoins
    );
  }

  renderCurrentTarget() {
    const currentTargetHand = createElement('div',
      { class: 'current-target-hand' },
      ...this.game.currentTarget.cards.map(card => card.render())
    );
    const currentTargetCoins = createElement('div',
      { class: 'current-target-coins' },
      ...coinArray.slice(0, this.game.currentTarget.coins)
    );
    return createElement('div',
        { class: 'current-target-station' },
        currentTargetHand, currentTargetCoins
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