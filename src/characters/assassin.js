const img = require('../images/characters/assassin.png');
const symbol = require('../images/symbols/assassin.png');
const brush = require('../images/brush-stroke/assassin.png');

export default {
  character: 'Assassin',
  image: img.default,
  symbol: symbol.default,
  action: 'Assassinate',
  effect: 'Pay 3 coins to assassinate another player',
  counteraction: '',
  brushStroke: brush.default,
}