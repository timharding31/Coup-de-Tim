import createElement from '../util/create_element';
import createModal from '../util/_create_modal';
import turnControl from '../util/turn_control';
import dukeOptions from '../characters/duke';
import assassinOptions from '../characters/assassin';
import ambassadorOptions from '../characters/ambassador';
import captainOptions from '../characters/captain';
import contessaOptions from '../characters/contessa';
import Turn from './_turn';
import turnSwitch from './turn_switch';

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

export default (rootEl, currentPlayer, game, turnEndCallback) => {
  let playerActions = currentPlayer.cards.map(card => card.action);

  let controlsList = createElement('ul', { class: 'turn-controls' }, ...allOptions.map((option, idx) => {
    if (option.action === 'Coup' && currentPlayer.coins < 7) return;
    if (option.action === 'Assassinate' && currentPlayer.coins < 3) return;
    return createElement('li',
      {
        class: 'turn-control-list-item',
        onClick: () => turnSwitch(rootEl, game, option.action, turnEndCallback),
        style: `background-color: ${((idx < 2) || (idx === 2 && currentPlayer.coins >= 7) || (idx > 2 && playerActions.includes(option.action))) ? option.backgroundColor : 'transparent'}`,
      },
      ...turnControl(option.symbol, option.action, option.effect));
  }));

  let controls = createElement('div', { class: 'current-player-controls', text: `<div class="control-description"><p>Player ${currentPlayer.idx}'s Turn</p><p>Choose an option below</p></div>` }, controlsList);
  return controls;
}