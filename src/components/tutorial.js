import Gameplay from './gameplay';
import tutorialTip from './forms_tips/tutorial_tip';
import createElement from '../util/create_element';

export default class Tutorial extends Gameplay {
  constructor(rootEl) {
    super(rootEl)
    this.veil = createElement('div', { id: 'tutorial-veil' })
    this.gameRoot.appendChild(this.veil);

    let courtDeck = document.getElementById('court-deck');
    let treasury = document.getElementById('treasury');
    let playerOne = document.getElementById('player-one');
    let playerOneChildNodes = [...playerOne.childNodes];
    let playerTwo = document.getElementById('player-two');
    let playerTwoChildNodes = [...playerTwo.childNodes];

    this.highlightable = {
      'all': [courtDeck, treasury, ...playerOneChildNodes, ...playerTwoChildNodes],
      'court-deck-treasury': [courtDeck, treasury],
      'computer-player': playerOneChildNodes,
      'computer-controls': [playerOneChildNodes[0]],
      'human-player': playerTwoChildNodes,
      'player-controls': [playerTwoChildNodes[0]],
      'player-cards': [playerTwoChildNodes[2]],
      'player-coins': [playerTwoChildNodes[1]]
    }

    this.anchors = {
      'court-deck-treasury': courtDeck,
      'computer-player': playerOne,
      'computer-controls': playerOneChildNodes[0],
      'human-player': playerTwo,
      'player-controls': playerTwoChildNodes[0],
      'player-cards': playerTwoChildNodes[2],
      'player-coins': playerTwoChildNodes[1]
    }

    this.darkenAll();
    this.highlightCourtDeckTreasury();
  }

  darkenAll() {
    this.highlightable['all'].forEach(node => {
      node.classList.remove('spotlit');
      node.classList.add('darkened');
    });
  }

  highlightCourtDeckTreasury() {
    this.darkenAll();
    this.highlightable['court-deck-treasury'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('court-deck-treasury', this.hightlightComputerPlayer.bind(this), null);
    this.gameRoot.appendChild(tooltip);
  }

  hightlightComputerPlayer() {
    this.darkenAll();
    this.highlightable['computer-player'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('computer-player', this.highlightComputerControls.bind(this), this.highlightCourtDeckTreasury.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  highlightComputerControls() {
    this.darkenAll();
    this.highlightable['computer-controls'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('computer-controls', this.highlightHumanPlayer.bind(this), this.hightlightComputerPlayer.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  highlightHumanPlayer() {
    this.darkenAll();
    this.highlightable['human-player'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('human-player', this.highlightPlayerControls.bind(this), this.highlightComputerControls.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  highlightPlayerControls() {
    this.darkenAll();
    this.highlightable['player-controls'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('player-controls', this.highlightPlayerCards.bind(this), this.highlightHumanPlayer.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  highlightPlayerCards() {
    this.darkenAll();
    this.highlightable['player-cards'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('player-cards', this.highlightPlayerCoins.bind(this), this.highlightPlayerControls.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  highlightPlayerCoins() {
    this.darkenAll();
    this.highlightable['player-coins'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.add('spotlit');
    });
    let tooltip = tutorialTip('player-coins', this.startTutorial.bind(this), this.highlightPlayerCards.bind(this));
    this.gameRoot.appendChild(tooltip);
  }

  startTutorial() {
    this.highlightable['all'].forEach(node => {
      node.classList.remove('darkened');
      node.classList.remove('spotlit');
    });
    this.veil.remove();
  }
}