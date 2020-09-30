import dukeOptions from '../assets/characters/duke';
import assassinOptions from '../assets/characters/assassin';
import ambassadorOptions from '../assets/characters/ambassador';
import captainOptions from '../assets/characters/captain';
import contessaOptions from '../assets/characters/contessa';

// const incomeSymbol = require('../images/symbols/income.png');
// const foreignAidSymbol = require('../images/symbols/foreign_aid.png');
// const coupSymbol = require('../images/symbols/coup.png');

export const introParagraph = [
  'In the not too distant future, the government is run for profit by a new "royal class" of multi-national CEOs. Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and desperation. Out of the oppressed masses rose The Resistance, an underground organization focused on overthrowing these powerful rulers. The valiant efforts of The Resistance have created discord, intrigue and weakness in the political courts of the noveaux-royal, bringing the government to brink of collapse.',
  'But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power. To be successful, you must destroy the influence of your rivals and drive them into exile. In these turbulent times there is only room for one to survive.'
];

export const influence = [
  '<strong>Facedown cards in front of a player represent who they influence at court</strong>. The characters printed on their face down cards represents which characters that player influences and their abilities.',
  '<strong>Every time a player loses an influence they have to turn over and reveal one of their face down cards</strong>. Revealed cards remain face up in front of the player visible to everyone and no longer provide influence for the player.',
  'Each player always chooses which of their own cards they wish to reveal when they lose an influence.',
  '<strong>When a player has lost all their influence they are exiled and out of the game.</strong>'
];

export const gamePlay = [
  '<strong>Each turn a player chooses one action only</strong>. A player may not pass.',
  'After the action is chosen the other player has an opportunity to challenge or counteract that action.',
  '<strong>If an action is not challenged or counteracted, the action automatically succeeds</strong>.',
  'Challenges are resolved first before any action or counteraction is resolved.',
  '<strong>When a player has lost all their influence and both their cards are face up in front of them, they are immediately out of the game</strong>. They leave their cards face up and return all their coins to the Treasury.',
  '<strong>The game ends when there is only one player left.</strong>'
];

export const actionsText = [
  '<strong>A player may choose any action they want and can afford.</strong>',
  'Some actions (Character Actions) require influencing characters.',
  '<strong>If they choose a Character Action a player must claim that the required character is one of their face down cards. They can be telling the truth or bluffing.</strong> They do not need to reveal any of their face down cards unless they are challenged. If they are not challenged they automatically succeed.',
  'If a player starts their turn with 10 (or more) coins they must launch a Coup that turn as their only action.'
];

// export const generalActions = {
//   'Income': {
//     effect: 'Take 1 coin from the Treasury.',
//     img: incomeSymbol.default,
//   },
//   'Foreign Aid': {
//     effect: 'Take 2 coins from the Treasury. (Can be blocked by the Duke)',
//     img: foreignAidSymbol.default,
//   },
//   'Coup': {
//     effect: 'Pay 7 coins to the Treasury and launch a Coup against another player. That player immediately loses an influence. A Coup is always successful. If you start your turn with 10 (or more) coins you are required to launch a Coup.',
//     img: coupSymbol.default,
//   },
// }

// export const characterActions = {
//   'Tax': {
//     character: 'Duke',
//     effect: 'Take 3 coins from the Treasury.',
//     img: dukeOptions.symbol,
//   },
//   'Assassinate': {
//     character: 'Assassin',
//     effect: 'Pay 3 coins to the Treasury and launch an assassination against another player. If successful that player immediately loses an influence. (Can be blocked by the Contessa)',
//     img: assassinOptions.symbol,
//   },
//   'Steal': {
//     character: 'Captain',
//     effect: 'Take 2 coins from another player. If they only have one coin, take only one. (Can be blocked by the Ambassador or the Captain)',
//     img: captainOptions.symbol,
//   },
//   'Exchange': {
//     character: 'Ambassador',
//     effect: 'Exchange cards with the Court. First take 2 random cards from the Court deck. Choose which, if any, to exchange with your face-down cards. Then return two cards to the Court deck.',
//     img: ambassadorOptions.symbol,
//   },
// };

// export const allActions = Object.entries(Object.assign({}, generalActions, characterActions));

export const counteractionsText = [
  'Counteractions can be taken by other players to intervene or block a player\'s action.',
  'Counteractions operate like character actions. Players may claim to influence any of the characters and use their abilities to counteract another player. They may be telling the truth or bluffing.',
  'They do not need to show any cards unless challenged. Counteractions may be challenged, but if not challenged they automatically succeed. If an action is successfully counteracted, the action fails but any coins paid as the cost of the action remain spent.'
];

export const counterActions = {
  'Blocks Foreign Aid': {
    character: 'Duke',
    effect: 'Any player claiming the Duke may counteract and block a player attempting to collect foreign aid. The player trying to gain foreign aid receives no coins that turn.',
    img: dukeOptions.symbol,
  },
  'Bocks Assassination': {
    character: 'Contessa',
    effect: 'The player who is being assassinated may claim the Contessa and counteract to block the assassination. The assassination fails but the fee paid by the player for the assassin remains spent.',
    img: contessaOptions.symbol,
  },
  'Blocks Stealing': {
    character: 'Ambassador/Captain',
    effect: 'The player who is being stolen from may claim either the Ambassador or the Captain and counteract to block the steal. The player trying to steal receives no coins that turn.',
    img: captainOptions.symbol,
  },
};

export const challenges = [
  '<strong>Any action or counteraction using character influence can be challenged.</strong>',
  'Any other player can issue a challenge to a player regardless of whether they are involved in the action.',
  'Once an action or counteraction is declared other players must be given an opportunity to challenge. Once play continues challenges cannot be retroactively issued.',
  '<strong>If a player is challenged they must prove they had the required influence by showing the relevant character is one of their face-down cards.</strong> If they can\'t, or do not wish to, prove it, they lose the challenge.If they can, the challenger loses.',
  '<strong>Whoever loses the challenge immediately loses an influence.</strong>',
  'If a player wins a challenge by showing the relevant character card, they first return that card to the Court deck, re-shuffle the Court deck and take a random replacement card. (That way they have not lost influence and other players do not know the new influence card they have)',
  'If an action is successfully challenged the entire action fails, but any coins paid as the cost of the action remain spent.'
];

