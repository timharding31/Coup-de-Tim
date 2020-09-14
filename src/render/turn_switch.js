import Income from './turns/income';
import ForeignAid from './turns/foreign_aid';
import Tax from './turns/tax';
import Steal from './turns/steal';
import Assassinate from './turns/assassinate';
import Exchange from './turns/exchange';
import Coup from './turns/coup';

export default (rootEl, game, action, turnCallBack) =>  {
  switch(action) {
    case 'Income':
      return new Income(rootEl, game, turnCallBack, action, false, false);
    case 'Foreign Aid':
      return new ForeignAid(rootEl, game, turnCallBack, action, false, true);
    case 'Tax':
      return new Tax(rootEl, game, turnCallBack, action, true, false);
    case 'Steal':
      return new Steal(rootEl, game, turnCallBack, action, true, true);
    case 'Assassinate':
      return new Assassinate(rootEl, game, turnCallBack, action, true, true);
    case 'Exchange':
      return new Exchange(rootEl, game, turnCallBack, action, true, false);
    case 'Coup':
      return new Coup(rootEl, game, turnCallBack, action, false, false);
    default:
      return;
  }
}

// Income:
// just go through

// Foreign Aid:
// offer target chance to block
// if !blocked, allow action to go through
  // if blocked, offer player chance to challenge
  // if blocked & challenged, make target prove Duke
    // if blocked & !challenged, don't allow action to go through
    // if blocked & challenged & proved, don't allow action to go through, return target's duke & give a new card
    // if blocked & challenged & !proved, allow action to go through, present forfeitChoice to target

// Tax:
// offer target chance to challenge
// if !challenged, allow action to go through
// if challenged, make player prove Duke
  // if challenged & proved, ALLOW action to go through, return player's duke & give new card
  // if challenged & !proved, DON'T ALLOW action to go through, present forfeitChoice to player

// Steal:
// offer target chance to block OR challenge
// if !blocked & !targetChallenged, ALLOW action to go through
// if !blocked & targetChallenged, make player prove Captain
  // if !blocked & targetChallenged & playerProved, ALLOW action to go through, return player's Captain & give new card
  // if !blocked & targetChallenged & !playerProved, DONT ALLOW & present forfeitChoice to player
// if blocked & !targetChallenged, offer player chance to challenge
  // if blocked & playerChallenged, make target prove Captain or Ambassador
    // if blocked & playerChallenged & targetProved, DONT ALLOW, return target's Capt/Amb & give a new card
    // if blocked & playerChallenged, & !targetProved, ALLOW & present forfeitChoice to target

// Assassinate:
// offer target chance to block OR challenge
// if !blocked & !targetChallenged, present forfeitChoice to target
// if !blocked & targetChallenged, make player prove Assassin
  // if !blocked & targetChallenged & playerProved, player WINS
  // if !blocked & targetChallenged & !playerProved, DONT ALLOW, present forfeitChoice to player
// if blocked & !targetChallenged, offer player chance to challenge
  // if blocked & playerChallenged, make target prove Contessa
    // if blocked & playerChallenged & targetProved, DONT ALLOW, return target's Capt/Amb & give a new card
    // if blocked & playerChallenged, & !targetProved, ALLOW & take card from target


