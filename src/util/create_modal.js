import createElement from './create_element';
const regeneratorRuntime = require("regenerator-runtime");
import Card from '../game/card';

export default (type, action, currentPlayer, currentTarget) => {
  let submitButton = createElement('button', { id: 'submit', text: 'Submit' });
  let modalHeader;
  let buttonPlaceholder = createElement('div', { style: 'display: none' });
  let buttons = [buttonPlaceholder];
  if (type === 'block-challenge') {
    let header = createElement('p', { text: `Player ${currentPlayer.idx} has chosen to <p class="modal-header-action">${action}</p>` });
    let subHeader = createElement('p', { text: `Will Player ${currentTarget.idx} allow them to continue?`});
    modalHeader = createElement('div', { class: 'modal-header' }, header, subHeader);
    let blockButton = createElement('button',
      {
        class: 'modal-response',
        id: 'modal-response-block',
        text: 'Block',
        onClick: () => submitButton.setAttribute('data-was-blocked', true),
      }
    );
    let challengeButton = createElement('button',
      {
        class: 'modal-response',
        id: 'modal-response-challenge',
        text: 'Challenge',
        onClick: () => submitButton.setAttribute('data-was-challenged', true),
      }
    );
    buttons = createElement('div', { id: 'modal-buttons', class: 'modal-buttons' }, blockButton, challengeButton, submitButton);
  } else if (type === 'player-choice') {
    let header;
    let subHeader;
    let cardButtons = [buttonPlaceholder];
    if (action === 'Assassinate' || action === 'Coup') {
      header = createElement('p', { text: `Player ${currentPlayer.idx}'s<p class="modal-header-action">${action}</p> was successful.` });
      subHeader = createElement('p', { text: `Player ${currentTarget.idx}, choose an influence to lose:` });
      cardButtons = currentTarget.cards.map((card, idx) => {
        let cardFaceUp = Object.assign(Object.create(Object.getPrototypeOf(card)), card);
        cardFaceUp.flipUp();
        let cardButton = createElement('button',
          {
            class: 'card-choice-button',
            id: `card-choice-${idx}`,
            onClick: () => {
              submitButton.setAttribute('data-idx1', idx);
              let that = document.getElementById(`card-choice-${idx}`);
              that.classList.add('selected');
            }
          }, cardFaceUp.render()
        );
        return cardButton;
      });
    } else if (action === 'Lost Challenge') {
      header = createElement('p', { text: `Player ${currentPlayer.idx} has lost the challenge. Choose an influence to lose:` });
      cardButtons = currentPlayer.cards.map((card, idx) => {
        let cardFaceUp = Object.assign(Object.create(Object.getPrototypeOf(card)), card);
        cardFaceUp.flipUp();
        let cardButton = createElement('button',
          {
            class: 'card-choice-button',
            id: `card-choice-${idx}`,
            onClick: () => {
              submitButton.setAttribute('data-idx1', idx);
              let that = document.getElementById(`card-choice-${idx}`);
              that.classList.add('selected');
            }
          }, cardFaceUp.render()
        );
        return cardButton;
      });
    } else if (action === 'Exchange') {
      header = createElement('p', { text: `Player ${currentPlayer.idx}, you must select two influences to return to the Court Deck` });
      cardButtons = currentPlayer.cards.map((card, idx) => {
        let cardFaceUp = Object.assign(Object.create(Object.getPrototypeOf(card)), card);
        cardFaceUp.flipUp();
        let cardButton = createElement('button',
          {
            class: 'card-choice-button',
            id: `card-choice-${idx}`,
            onClick: () => {
              let submitButtonDataSet = submitButton.dataset;
              if (submitButtonDataSet['idx1']) {
                submitButton.setAttribute('data-idx2', idx);
              } else {
                submitButton.setAttribute('data-idx1', idx);
              }
              let that = document.getElementById(`card-choice-${idx}`);
              that.classList.add('selected');
            }
          },
          cardFaceUp.render()
        );
        return cardButton;
      });
    } else if (action === 'Steal') {
      header = createElement('p', { text: `Player ${currentPlayer.idx}'s<p class="modal-header-action">${action}</p> was successful.` });
      subHeader = createElement('p', { text: `Two of Player ${currentTarget.idx}'s coins have been stolen. Hit submit to continue:` });
    } else {
      header = createElement('p', { text: `No further action required. Player ${currentPlayer.idx}, hit submit to continue` });
    }
    modalHeader = createElement('div', { class: 'modal-header' }, header);
    if (subHeader) modalHeader.appendChild(subHeader);
    buttons = createElement('div', { id: 'modal-buttons', class: 'modal-buttons' }, ...cardButtons, submitButton);
  }

  let modal = createElement('div', { id: `modal-${type}`, class: `modal-${type}` }, modalHeader, buttons);
  return modal;
}