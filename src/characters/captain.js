const img = require('../images/characters/captain.png');
const symbol = require('../images/symbols/captain.png');
const brush = require('../images/brush-stroke/captain.png');

export default {
  character: 'Captain',
  image: img.default,
  symbol: symbol.default,
  action: 'Steal',
  effect: 'Take 2 coins from another player',
  counteraction: 'Blocks stealing',
  brushStroke: brush.default,
}