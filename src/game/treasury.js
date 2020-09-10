import createElement from '../util/create_element';
import createCoin from '../util/create_coin';

export default class Treasury {
  constructor() {
    this.coins = 50;
  }

  dispense(num) {
    this.coins -= num;
    return num;
  }

  collect(num) {
    this.coins += num;
    return num;
  }

  render() {
    let coinsArray = new Array(this.coins).fill(1).map(_ => createCoin(160));
    let coins = createElement('div',
      { class: 'treasury', style: 'width: 200px; height: 200px;' },
      ...coinsArray
    );
    return coins;
  }
}