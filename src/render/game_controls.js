import createElement from '../util/create_element';
import turnControl from '../util/turn_control';
import dukeOptions from '../characters/duke';
import assassinOptions from '../characters/assassin';
import ambassadorOptions from '../characters/ambassador';
import captainOptions from '../characters/captain';
import contessaOptions from '../characters/contessa';

const incomeSymbol = require('../images/symbols/income.png');
const foreignAidSymbol = require('../images/symbols/foreign_aid.png');
const coupSymbol = require('../images/symbols/coup.png');

// character: 'Ambassador',
//   image: img.default,
//     symbol: symbol.default,
//       action: 'Exchange',
//         effect: 'Exchange cards with Court Deck',
//           counteraction: 'Blocks stealing',
//             brushStroke: brush.default,

const characterOptions = [dukeOptions, assassinOptions, ambassadorOptions, captainOptions];
const constOptions = [
  { action: 'Income', symbol: incomeSymbol.default, effect: 'Take 1 Coin', backgroundColor: 'rgba(218, 166, 65, 0.5)' },
  { action: 'Foreign Aid', symbol: foreignAidSymbol.default, effect: 'Take 2 Coins', backgroundColor: 'rgba(138, 49, 123, 0.5)' },
  { action: 'Coup', symbol: coupSymbol.default, effect: 'Pay 7 coins to coup another player', backgroundColor: 'rgba(55, 97, 113, 0.5)' }
];

const allOptions = [...constOptions, ...characterOptions];

export default (currentPlayer, turnActions) => {
  let playerActions = currentPlayer.cards.map(card => card.action);

  return createElement('ul', { class: 'turn-controls' }, ...allOptions.map((option, idx) => {
    if (option.action === 'Coup' && currentPlayer.coins < 7) return;
    if (option.action === 'Assassinate' && currentPlayer.coins < 3) return;
    return createElement('li',
      {
        class: 'turn-control-list-item',
        onClick: () => turnActions[option.action](),
        style: `background-color: ${((idx < 2) || (idx === 2 && currentPlayer.coins >= 7) || (idx > 2 && playerActions.includes(option.action))) ? option.backgroundColor : 'transparent'}`,
      },
      ...turnControl(option.symbol, option.action, option.effect));
  }));
}