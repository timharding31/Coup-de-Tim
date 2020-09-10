import createElement from '../util/create_element';
import coinArray from '../util/coin_array';

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
    return createElement('div', { class: 'treasury' }, ...coinArray.slice(0, this.coins));
  }
}