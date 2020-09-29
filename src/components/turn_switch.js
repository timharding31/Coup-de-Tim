import Turn from './turn';

export default (game, action, turnCallBack) =>  {
  if (game.gameOver) return
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


