import createElement from '../util/create_element';
import turnControl from '../util/turn_control';
import dukeOptions from '../assets/characters/duke';
import assassinOptions from '../assets/characters/assassin';
import ambassadorOptions from '../assets/characters/ambassador';
import captainOptions from '../assets/characters/captain';
import turnSwitch from './turn_switch';

const incomeSymbol = require('../assets/images/symbols/income.png');
const foreignAidSymbol = require('../assets/images/symbols/foreign_aid.png');
const coupSymbol = require('../assets/images/symbols/coup.png');

const characterOptions = [dukeOptions, assassinOptions, ambassadorOptions, captainOptions];
const constOptions = [
  { action: 'Income', symbol: incomeSymbol.default, effect: 'Take 1 Coin', backgroundColor: 'rgba(218, 166, 65, 0.5)' },
  { action: 'Foreign Aid', symbol: foreignAidSymbol.default, effect: 'Take 2 Coins', backgroundColor: 'rgba(138, 49, 123, 0.5)' },
  { action: 'Coup', symbol: coupSymbol.default, effect: 'Pay 7 coins to Coup another player', backgroundColor: 'rgba(55, 97, 113, 0.5)' }
];

let allOptions = [...constOptions, ...characterOptions];

export default (game, currentPlayer, turnSwitchCallback) => {
  let playerActions = currentPlayer.cards.map(card => card.action);

  let controls = createElement('ul', { class: 'turn-controls' }, ...allOptions.map((option, idx) => {
    if (currentPlayer.coins >= 10 && option.action !== 'Coup') return;
    if (option.action === 'Coup' && currentPlayer.coins < 7) return;
    if (option.action === 'Assassinate' && currentPlayer.coins < 3) return;
    return createElement('li',
      {
        class: 'turn-control-list-item',
        onClick: () => turnSwitch(game, option.action, turnSwitchCallback),
        style: `background-color: ${((idx < 2) || (idx === 2 && currentPlayer.coins >= 7) || (idx > 2 && playerActions.includes(option.action))) ? option.backgroundColor : 'transparent'}`,
      },
      ...turnControl(option.symbol, option.action, option.effect));
  }));
  return controls;
}