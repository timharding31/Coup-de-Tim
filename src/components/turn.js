import blockChallengeForm from './forms/block_challenge_form';
import loseCardSelector from './forms/lose_card_selector_form';
import exchangeSelectorForm from './forms/exchange_selector_form';
import DOMState from './dom_state';

export default class Turn {
  constructor(
    game,
    turnCallBack,
    action,
    {
      challengeable,
      blockable,
      character,
      blockableBy,
      receiptAmount,
      paymentAmount
    }
    ) {
    this.gameRoot = document.getElementById('game');
    this.domState = new DOMState();
    // domState = {
    //   playerWasBlocked,
    //   playerWasChallenged,
    //   targetLostChallengeIdx,
    //   targetWasChallenged,
    //   playerLostChallengeIdx,
    //   killIdx,
    // }

    // game state
    this.game = game;
    this.currentPlayer = game.currentPlayer;
    this.currentTarget = game.currentTarget;
    this.turnCallBack = turnCallBack;
    this.action = action;
    this.blockable = blockable;
    this.challengeable = challengeable;

    // turn outcome deciders
    this.complete = false;
    this.settled = false;

    // challenge outcome deciders
    this.playerLostChallenge = false;
    this.playerWonChallenge = false;
    this.targetLostChallenge = false;
    this.targetWonChallenge = false;

    // turn outcome levers
    this.playerDidSteal = false;
    this.playerDidPay = true;
    this.playerDidReceive = false;
    this.paymentAmount = paymentAmount;
    this.receiptAmount = receiptAmount;
    this.playerDidKill = false;
    this.killIdx = null;

    if (challengeable) {
      this.playerWonChallengeIdx = game.currentPlayer.cards.map(card => card.character).indexOf(character);
    }
    if (blockable) {
      let targetHoldIdxCandidate = game.currentTarget.cards.map(card => card.character).indexOf(blockableBy[0]);
      if (targetHoldIdxCandidate < 0 && blockableBy[1]) {
        this.targetWonChallengeIdx = game.currentTarget.cards.map(card => card.character).indexOf(blockableBy[1]);
      }
      this.targetWonChallengeIdx = targetHoldIdxCandidate;
    }


    if (challengeable || blockable) {
      this.promptTargetForChallenge();
      // this.firstModal = createModalNew('block-challenge', 'target', action, this.currentPlayer, this.currentTarget);
    } else if (action === 'Coup') {
      this.settled = true;
      this.promptTargetForKillChoice();
      // this.firstModal = createModalNew('forfeit-action', 'target', action, this.currentPlayer, this.currentTarget);
    } else {
      this.playerDidReceive = true;
      this.complete = true;
      this.settled = true;
    }

    this.promptTargetForChallenge = this.promptTargetForChallenge.bind(this);
    this.targetAllowedPlayer = this.targetAllowedPlayer.bind(this);
    this.promptPlayerForChallenge = this.promptPlayerForChallenge.bind(this);
    this.promptPlayerForLostChallengeChoice = this.promptPlayerForLostChallengeChoice.bind(this);
    this.promptTargetForLostChallengeChoice = this.promptTargetForLostChallengeChoice.bind(this);
    this.promptTargetForKillChoice = this.promptTargetForKillChoice.bind(this);
    this.promptPlayerForExchangeChoice = this.promptPlayerForExchangeChoice.bind(this);

    this.awaitTurnSettled();
    this.awaitTurnEnd();
  }

  // add block challenge modal to target's controls
  promptTargetForChallenge() {
    let blockChallenge = blockChallengeForm(this.action, this.blockable, this.challengeable);
    this.currentTarget.renderControls(blockChallenge);
    blockChallenge.addEventListener('submit', (e) => {
      e.preventDefault();
      blockChallenge.remove();
      this.domState = this.domState.refresh();
      if (this.domState.playerWasBlocked) {
        this.promptPlayerForChallenge();
      } else if (this.domState.playerWasChallenged) {
        if (this.playerWonChallengeIdx >= 0) {
          this.currentPlayer.reshuffleCard(this.playerWonChallengeIdx);
          this.currentPlayer.flipAllCardsUp();
          this.promptTargetForLostChallengeChoice();
        } else {
          this.promptPlayerForLostChallengeChoice();
        }
      } else {
        this.targetAllowedPlayer();
      }
    });
  }

  // player was allowed
  targetAllowedPlayer() {
    this.settled = true;
    switch(this.action) {
      case 'Assassinate':
        this.playerDidKill = true;
        return this.promptTargetForKillChoice();
      case 'Coup':
        this.playerDidKill = true;
        return this.promptTargetForKillChoice();
      case 'Steal':
        this.playerDidSteal = true;
        return this.endTurn();
      case 'Foreign Aid':
        this.playerDidReceive = true;
        return this.endTurn();
      case 'Exchange':
        this.currentPlayer.exchangePartOne();
        return this.promptPlayerForExchangeChoice();
      case 'Tax':
        this.playerDidReceive = true;
        return this.endTurn();
    }
  }

  // add block challenge modal to player's controls
  promptPlayerForChallenge() {
    let challengeForm = blockChallengeForm('Block', false, true);
    this.currentPlayer.renderControls(challengeForm);
    challengeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      challengeForm.remove();
      this.domState = this.domState.refresh();
      if (this.domState.targetWasChallenged) {
        if (this.targetWonChallengeIdx >= 0) {
          this.currentTarget.reshuffleCard(this.targetWonChallengeIdx);
          this.promptPlayerForLostChallengeChoice();
        } else {
          this.promptTargetForLostChallengeChoice();
        }
      } else {
        this.playerDidKill = false;
        this.playerDidSteal = false;
        this.playerDidReceive = true;
        this.complete = true;
      }
    })
  }

  // (cause=challenge/action, player=currentPlayer/currentTarget)
  // ask player to choose card after lost challenge
  promptPlayerForLostChallengeChoice() {
    this.playerLostChallenge = true;
    let lostChallengeForm = loseCardSelector('challenge', this.currentPlayer);
    this.currentPlayer.renderControls(lostChallengeForm);
    lostChallengeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      lostChallengeForm.remove();
      this.domState = this.domState.refresh();
      this.playerLostChallengeIdx = this.domState.playerLostChallengeIdx;
      this.settled = true;
      this.endTurn();
    })
  }

  // ask target to choose card after lost challenge
  promptTargetForLostChallengeChoice() {
    this.targetLostChallenge = true;
    let lostChallengeForm = loseCardSelector('challenge', this.currentTarget);
    this.currentTarget.renderControls(lostChallengeForm);
    lostChallengeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      lostChallengeForm.remove();
      this.domState = this.domState.refresh();
      this.targetLostChallengeIdx = this.domState.targetLostChallengeIdx;
      this.settled = true;
      setTimeout(this.targetAllowedPlayer, 10);
    })
  }

  // ask target to choose card after Assassination or Coup
  promptTargetForKillChoice() {
    debugger
    let killForm = loseCardSelector('action', this.currentTarget);
    this.currentTarget.renderControls(killForm);
    killForm.addEventListener('submit', (e) => {
      e.preventDefault();
      killForm.remove();
      this.domState = this.domState.refresh();
      this.killIdx = this.domState.killIdx;
      this.endTurn();
    })
  }

  // ask player to choose return cards after Exchange
  promptPlayerForExchangeChoice() {
    let exchangeForm = exchangeSelectorForm(this.currentPlayer);
    this.currentPlayer.renderControls(exchangeForm);
    exchangeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      exchangeForm.remove();
      this.domState = this.domState.refresh();
      const [idx1, idx2] = this.domState.exchangeIndices;
      this.currentPlayer.exchangePartTwo(idx1, idx2);
      this.endTurn();
    })
  }

  endTurn() {
    this.complete = true;
  }

  awaitTurnSettled() {
    const turnSettledLoop = () => {
      if (this.settled) {
        this.playerChallengeEffect();
        this.targetChallengeEffect();
      } else {
        setTimeout(turnSettledLoop, 0);
      }
    }
    turnSettledLoop();
  }

  awaitTurnEnd() {
    const turnEndLoop = () => {
      if (this.complete) {
        this.playerMonetaryEffect();
        this.targetMonetaryEffect();
        this.targetActionEffect();
        this.turnCallBack();
      } else {
        setTimeout(turnEndLoop, 0);
      }
    }
    turnEndLoop();
  }

  playerChallengeEffect() {
    if (this.playerLostChallenge) {
      this.currentPlayer.loseCard(this.playerLostChallengeIdx);
    }
  }

  targetChallengeEffect() {
    if (this.targetLostChallenge) {
      this.currentTarget.loseCard(this.targetLostChallengeIdx);
    }
  }

  playerMonetaryEffect() {
    this.currentPlayer.payCoins(this.paymentAmount);
    if (this.playerDidSteal) {
      this.currentPlayer.stealCoins(2);
    } else if (this.playerDidReceive) {
      this.currentPlayer.receiveCoins(this.receiptAmount);
    }
  }

  targetMonetaryEffect() {
    if (this.playerDidSteal) {
      this.currentTarget.loseCoins(2);
    }
  }

  targetActionEffect() {
    if (this.playerDidKill) {
      this.currentTarget.loseCard(this.killIdx);
    }
  }

  
}