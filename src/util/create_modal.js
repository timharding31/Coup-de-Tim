import createElement from './create_element';
const regeneratorRuntime = require("regenerator-runtime");
const intersection = require('../images/intersection_texture.png');

export default (type, recipient, action, currentPlayer, currentTarget) => {
  let currentPlayerStr = currentPlayer.idx === 1 ? 'Player One' : 'Player Two';
  let currentTargetStr = currentTarget.idx === 1 ? 'Player One' : 'Player Two';
  let modalId = `modal-${recipient}-${type}`;


  const modalOptions = {
    'modal-target-block-challenge': {
      messages: [
        `${currentPlayerStr} has chosen to ${action.toUpperCase()}`,
        `${currentTargetStr}, would you like to BLOCK or CHALLENGE this ${action.toUpperCase()}?`
      ],
      buttonOptions: [
        { txt: `Block ${action}`, btnId: 'target-block' },
        { txt: `Challenge ${action}`, btnId: 'target-challenge' },
        { txt: `Allow ${action}`, btnId: 'allow' }
      ]
    },
    'modal-target-challenge': {
      messages: [
        `${currentPlayerStr} has chosen to ${action.toUpperCase()}`,
        `${currentTargetStr}, would you like to CHALLENGE this ${action.toUpperCase()}?`
      ],
      buttonOptions: [
        { txt: `Challenge ${action}`, btnId: 'target-challenge' },
        { txt: `Allow ${action}`, btnId: 'allow' }
      ]
    },
    'modal-target-block': {
      messages: [
        `${currentPlayerStr} has chosen to ${action.toUpperCase()}`,
        `${currentTargetStr}, would you like to BLOCK this ${action.toUpperCase()}?`
      ],
      buttonOptions: [
        { txt: `Block ${action}`, btnId: 'target-block' },
        { txt: `Allow ${action}`, btnId: 'allow' }
      ]
    },
    'modal-player-challenge': {
      messages: [
        `${currentTargetStr} has BLOCKED ${currentPlayerStr}'s ${action.toUpperCase()}`,
        `${currentPlayerStr}, would you like to CHALLENGE this BLOCK?`
      ],
      buttonOptions: [
        { txt: `Challenge Block`, btnId: 'player-challenge' },
        { txt: `Allow Block`, btnId: 'allow' }
      ]
    },
    'modal-target-forfeit-challenge': {
      messages: [
        `${currentPlayerStr}'s CHALLENGE was successful!`,
        `${currentTargetStr} must choose an influence to forfeit:`
      ]
    },
    'modal-target-forfeit-action': {
      messages: [
        `${currentPlayerStr}'s ${action.toUpperCase()} was successful!`,
        `${currentTargetStr} must choose an influence to forfeit:`
      ]
    },
    'modal-player-forfeit': {
      messages: [
        `${currentTargetStr}'s CHALLENGE was successful!`,
        `${currentPlayerStr} must choose an influence to forfeit:`
      ]
    },
    'modal-player-exchange': {
      messages: [
        `${currentPlayerStr}, select two influences to return to the Court Deck`
      ]
    }
  }

  let messages = modalOptions[modalId].messages;
  let header = messages.map(message => createElement('p', { text: message }));

  let tint = createElement('div', { class: 'modal-tint' });
  let modal = createElement('div',
    {
      id: `modal-${type}`,
      style: `background-image: url("${intersection.default}")`,
      'data-submit': false,
      'data-idx1': '',
      'data-idx2': '',
      'data-targetChallenge': false,
      'data-targetBlock': false,
      'data-playerChallenge': false,
      'data-allow': false,

  },
  tint,
  ...header);

  let buttons, allButtons, submit;

  if (['block-challenge', 'block', 'challenge'].includes(type)) {
    let buttonOptions = modalOptions[modalId].buttonOptions;
    buttons = buttonOptions.map(buttonOption => createElement('button', {
      class: 'modal-button',
      id: buttonOption.btnId,
      text: buttonOption.txt,
      type: 'submit',
      onClick: () => {
        modal.setAttribute(`data-${buttonOption.btnId}`, true);
        modal.setAttribute('data-submit', true);
      }
    }));
    allButtons = createElement('div', { class: 'modal-buttons' }, ...buttons);
  } else if (type === 'exchange') {
    buttons = currentPlayer.cards.map((card, idx) => {
      let cardFaceUp = Object.assign(Object.create(Object.getPrototypeOf(card)), card);
      cardFaceUp.flipUp();
      let cardButton = createElement('button',
        {
          class: 'card-choice-button',
          id: `card-choice-${idx}`,
          type: 'button',
          onClick: () => {
            let modalDataSet = modal.dataset;
            if (modalDataSet['idx1']) {
              modal.setAttribute('data-idx2', idx);
            } else {
              modal.setAttribute('data-idx1', idx);
            }
            let that = document.getElementById(`card-choice-${idx}`);
            that.classList.toggle('selected');
          }
        },
        cardFaceUp.render()
      );
      return cardButton;
    });
    let submitBtn = createElement('button',
      {
        id: 'submit',
        text: 'Submit',
        type: 'submit',
        onClick: () => modal.setAttribute('data-submit', true)
      });
    submit = createElement('div', { class: 'submit-button-container' }, submitBtn);
    allButtons = createElement('div', { id: 'modal-buttons', class: 'modal-buttons' }, ...buttons);
  } else {
    let cardholder;
    if (recipient === 'target') {
      cardholder = currentTarget;
    } else if (recipient === 'player') {
      cardholder = currentPlayer;
    }
    buttons = cardholder.cards.map((card, idx) => {
      let cardFaceUp = Object.assign(Object.create(Object.getPrototypeOf(card)), card);
      cardFaceUp.flipUp();
      let cardButton = createElement('button',
        {
          class: 'card-choice-button',
          type: 'button',
          id: `card-choice-${idx}`,
          onClick: () => {
            modal.setAttribute('data-idx1', idx);
            let that = document.getElementById(`card-choice-${idx}`);
            that.classList.toggle('selected');
          }
        },
        cardFaceUp.render()
      );
      return cardButton;
    });
    let submitBtn = createElement('button',
      {
        id: 'submit',
        text: 'Submit',
        type: 'submit',
        onClick: () => modal.setAttribute('data-submit', true)
      });
    submit = createElement('div', { class: 'submit-button-container' }, submitBtn);
    allButtons = createElement('div', { id: 'modal-buttons', class: 'modal-buttons' }, ...buttons);
  }


  modal.appendChild(allButtons);
  if (submit) modal.appendChild(submit);
  return modal
}