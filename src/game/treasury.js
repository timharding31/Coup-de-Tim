import createElement from '../util/create_element';
import createCoin from '../util/create_coin';
import { removeAllChildNodes } from '../util/dom_nodes_util';

export default class Treasury {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.coins = 50;
    
    this.dispense = this.dispense.bind(this);
    this.collect = this.collect.bind(this);
    this.render = this.render.bind(this);
  }

  dispense(num) {
    this.coins -= num;
    this.render();
    return num;
  }

  collect(num) {
    this.coins += num;
    this.render();
    return num;
  }

  render() {
    removeAllChildNodes(this.rootEl);
    let coinsArray = new Array(this.coins).fill(1).map(_ => createCoin(160));
    let coins = createElement('div',
      { class: 'treasury', style: 'width: 200px; height: 200px;' },
      ...coinsArray
    );
    this.rootEl.appendChild(coins);
  }
}