import createElement from '../../util/create_element';

const MESSAGE_OPTIONS = {
  'court-deck-treasury': 'Players are each dealt two Influence Cards and disbursed two Coins to start the game. The remaining Cards and Coins are kept safely in the Court Deck and Treasury.',
  'computer-player': 'This is your Computer Opponent. Its two Cards remain face-down until they are lost during the game.',
  'computer-controls': 'Your Computer Opponent will alert you to its decisions here. It will select an Action during its turn, and may try to Challenge your Actions or deploy Counteractions.',
  'human-player': 'This is your gameplay area. Your interaction with Coup de Tim will occur here.',
  'player-controls': 'You submit your Action choices to start each turn here. Follow-up questions and options during your Opponent\'s turn will also appear.',
  'player-cards': 'Your Influence cards remain face-up during gameplay. If you successfully defend a challenge, your card will be reshuffled and you will be dealt a new one to keep your opponent in the dark.',
  'player-coins': 'Your coins disbursed from the Treasury are kept here, and can be used to finance the game\'s offensive Actions (Assassination and Coup).',
}

const HINT_OPTIONS = {
  'computer-player': 'If you eliminate both of your Opponent\'s Influence cards before they eliminate yours, you are the Winner!',
  'computer-controls': 'The Computer is sneaky! It may try to bluff its Actions and Counteractions.',
  'player-controls': 'Bluffing is encouraged, but an Action will be colored-in if you have the Influence to support it.',
  'player-coins': 'Hit Next to start the game, it\'s your turn first!'
}

const ID_OPTIONS = {
  'court-deck-treasury': 1,
  'computer-player': 2,
  'computer-controls': 3,
  'human-player': 4,
  'player-controls': 5,
  'player-cards': 6,
  'player-coins': 7,
}

const PLACEMENT_OPTIONS = {
  'court-deck-treasury': 'right',
  'computer-player': 'top',
  'computer-controls': 'left',
  'human-player': 'bottom',
  'player-controls': 'left',
  'player-cards': 'bottom',
  'player-coins': 'bottom',
}

export default (area, highlightNextFunction, highlightPrevFunction) => {
  let tooltipMessage = createElement('p', { id: 'tutorial-message', text: MESSAGE_OPTIONS[area] });
  let tooltipHint = createElement('p', { id: 'tutorial-hint', text: HINT_OPTIONS[area] });
  let tooltip = createElement('div', { id: `tutorial-tip-${ID_OPTIONS[area]}`, class: `${PLACEMENT_OPTIONS[area]}` }, tooltipMessage);
  if (HINT_OPTIONS[area]) tooltip.appendChild(tooltipHint);

  let nextButton = createElement('button',
    {
      id: 'tutorial-button-next',
      text: 'Next',
      type: 'button',
      onClick: () => {
        highlightNextFunction();
        tooltip.remove();
      }
    }
  );
  let prevButton = createElement('button',
    {
      id: 'tutorial-button-prev',
      text: 'Prev',
      type: 'button',
      onClick: () => {
        highlightPrevFunction();
        tooltip.remove();
      }
    }
  );
  let buttons = createElement('div', { id: 'tutorial-buttons' }, nextButton);
  if (highlightPrevFunction) buttons.appendChild(prevButton);
  tooltip.appendChild(buttons);

  return tooltip;
}