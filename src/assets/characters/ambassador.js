const img = require('../images/characters/ambassador.png');
const symbol = require('../images/symbols/ambassador.png');
const brush = require('../images/brush-stroke/ambassador.png');

export default {
  character: 'Ambassador',
  image: img.default,
  symbol: symbol.default,
  action: 'Exchange',
  effect: 'Exchange cards with Court Deck',
  counteraction: 'Blocks stealing',
  brushStroke: brush.default,
  backgroundColor: 'rgba(76, 152, 112, 0.5)',
}