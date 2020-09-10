export default class Treasury {
  constructor() {
    this.coins = 50;
  }

  dispense = num => {
    this.coins -= num;
    return num;
  }

  collect = num => {
    this.coins += num;
    return num;
  }
}