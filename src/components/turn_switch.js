import Turn from './turn';

export default (game, action, turnCallBack) =>  {
  switch(action) {
    case 'Income':
      return new Turn(game, turnCallBack, action, {
        challengeable: false,
        blockable: false,
        character: null,
        blockableBy: null,
        receiptAmount: 1,
        paymentAmount: 0,
      });
    case 'Foreign Aid':
      return new Turn(game, turnCallBack, action, {
        challengeable: false,
        blockable: true,
        character: null,
        blockableBy: ['Duke'],
        receiptAmount: 2,
        paymentAmount: 0,
      });
    case 'Tax':
      return new Turn(game, turnCallBack, action, {
        challengeable: true,
        blockable: false,
        character: 'Duke',
        blockableBy: null,
        receiptAmount: 3,
        paymentAmount: 0,
      });
    case 'Steal':
      return new Turn(game, turnCallBack, action, {
        challengeable: true,
        blockable: true,
        character: 'Captain',
        blockableBy: ['Captain', 'Ambassador'],
        receiptAmount: 0,
        paymentAmount: 0,
      });
    case 'Assassinate':
      return new Turn(game, turnCallBack, action, {
        challengeable: true,
        blockable: true,
        character: 'Assassin',
        blockableBy: ['Contessa'],
        receiptAmount: 0,
        paymentAmount: 3,
      });
    case 'Exchange':
      return new Turn(game, turnCallBack, action, {
        challengeable: true,
        blockable: false,
        character: 'Ambassador',
        blockableBy: null,
        receiptAmount: 0,
        paymentAmount: 0,
      });
    case 'Coup':
      return new Turn(game, turnCallBack, action, {
        challengeable: false,
        blockable: false,
        character: null,
        blockableBy: null,
        receiptAmount: 0,
        paymentAmount: 7,
      });
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


