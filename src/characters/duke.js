const img = require('../images/characters/duke.png');
const symbol = require('../images/symbols/duke.png');
const brush = require('../images/brush-stroke/duke.png');

export default {
  character: 'Duke',
  image: img.default,
  symbol: symbol.default,
  action: 'Tax',
  effect: 'Take 3 coins from Treasury',
  counteraction: 'Blocks Foreign Aid',
  brushStroke: brush.default,
}