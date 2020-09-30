import blockChallengeForm from './forms_tips/block_challenge_form';
import loseCardSelector from './forms_tips/lose_card_selector_form';
import exchangeSelectorForm from './forms_tips/exchange_selector_form';
import computerPlayerMessage from './forms_tips/computer_player_message';
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
    }) {
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
      } else {
        this.targetWonChallengeIdx = targetHoldIdxCandidate;
      }
    }

    if (this.currentPlayer.isComputer) {
      let announcement = computerPlayerMessage(this.action);
      this.currentPlayer.renderControls(announcement);
    } else {
      this.currentTarget.learnOpponentMove(this.action);
    }

    if (challengeable || blockable) {
      this.promptTargetForChallenge();
    } else if (action === 'Coup') {
      this.settled = true;
      this.playerDidKill = true;
      this.promptTargetForKillChoice();
    } else {
      setTimeout(() => {
        this.playerDidReceive = true;
        this.complete = true;
        this.settled = true;
      }, 1000);
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
    if (this.currentPlayer.isComputer) {
      let blockChallenge = blockChallengeForm(this.action, this.blockable, this.challengeable);
      this.currentTarget.renderControls(blockChallenge);
      blockChallenge.addEventListener('submit', (e) => {
        e.preventDefault();
        blockChallenge.remove();
        this.domState = this.domState.refresh();
        if (this.domState.playerWasBlocked) {
          this.currentPlayer.learnOpponentBlock(this.action);
          this.promptPlayerForChallenge();
        } else if (this.domState.playerWasChallenged) {
          if (this.playerWonChallengeIdx >= 0) {
            if (this.currentTarget.cards.length >= 2) {
              this.currentPlayer.reshuffleCard(this.playerWonChallengeIdx);
            }
            this.promptTargetForLostChallengeChoice();
          } else {
            this.promptPlayerForLostChallengeChoice();
          }
        } else {
          this.targetAllowedPlayer();
        }
      });
    } else {
      let computerChallenged = this.currentTarget.decideChallenge(this.action);
      let computerBlocked = this.currentTarget.decideBlock(this.action);
      if (computerChallenged) {
        let announcement = computerPlayerMessage(`Challenge ${this.action}`);
        this.currentTarget.renderControls(announcement);
      } else if (computerBlocked) {
        let announcement = computerPlayerMessage(`Block ${this.action}`);
        this.currentTarget.renderControls(announcement);
      } else {
        let announcement = computerPlayerMessage(`Allow ${this.action}`);
        this.currentTarget.renderControls(announcement);
      }
      setTimeout(() => {
        if (computerChallenged) {
          if (this.playerWonChallengeIdx >= 0) {
            if (this.currentTarget.cards.length >= 2) {
              this.currentPlayer.reshuffleCard(this.playerWonChallengeIdx);
            }
            this.promptTargetForLostChallengeChoice();
          } else {
            this.promptPlayerForLostChallengeChoice();
          }
        } else if (computerBlocked) {
          this.promptPlayerForChallenge();
        } else {
          this.targetAllowedPlayer();
        }
      }, 100);
    }
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
    if (this.currentPlayer.isComputer) {
      let blockWasChallenged = this.currentPlayer.decideBlockChallenge(this.action);
      if (blockWasChallenged) {
        let announcement = computerPlayerMessage(`Challenge Block`);
        this.currentPlayer.renderControls(announcement);
      } else {
        let announcement = computerPlayerMessage('Fine, be that way');
        this.currentPlayer.renderControls(announcement);
      }
      setTimeout(() => {
        if (blockWasChallenged) {
          if (this.targetWonChallengeIdx >= 0) {
            if (this.currentPlayer.cards.length >= 2) {
              this.currentTarget.reshuffleCard(this.targetWonChallengeIdx);
            }
            this.promptPlayerForLostChallengeChoice();
          } else {
            this.promptTargetForLostChallengeChoice();
          }
        } else {
          this.playerDidKill = false;
          this.playerDidSteal = false;
          this.playerDidReceive = false;
          this.complete = true;
        }
      }, 1000);
    } else {
      let challengeForm = blockChallengeForm('Block', false, true);
      this.currentPlayer.renderControls(challengeForm);
      challengeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        challengeForm.remove();
        this.domState = this.domState.refresh();
        if (this.domState.targetWasChallenged) {
          if (this.targetWonChallengeIdx >= 0) {
            if (this.currentPlayer.cards.length >= 2) {
              this.currentTarget.reshuffleCard(this.targetWonChallengeIdx);
            }
            this.promptPlayerForLostChallengeChoice();
          } else {
            this.promptTargetForLostChallengeChoice();
          }
        } else {
          this.playerDidKill = false;
          this.playerDidSteal = false;
          this.playerDidReceive = false;
          this.complete = true;
        }
      })
    }
  }

  // (cause=challenge/action, player=currentPlayer/currentTarget)
  // ask player to choose card after lost challenge
  promptPlayerForLostChallengeChoice() {
    if (this.currentPlayer.isComputer) {
      let announcement = computerPlayerMessage(`Lost Challenge`);
      this.currentPlayer.renderControls(announcement);
      setTimeout(() => {
        this.playerLostChallenge = true;
        this.playerLostChallengeIdx = this.currentPlayer.randKillIdx();
        this.settled = true;
        this.endTurn();
      }, 1000);
    } else {
      let announcement = computerPlayerMessage(`Won Challenge`);
      this.currentTarget.renderControls(announcement);
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
  }

  // ask target to choose card after lost challenge
  promptTargetForLostChallengeChoice() {
    if (this.currentPlayer.isComputer) {
      let announcement = computerPlayerMessage(`Won Challenge`);
      this.currentPlayer.renderControls(announcement);
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
    } else {
      let announcement = computerPlayerMessage(`Lost Challenge`);
      this.currentTarget.renderControls(announcement);
      setTimeout(() => {
        this.targetLostChallenge = true;
        this.targetLostChallengeIdx = this.currentTarget.randKillIdx();
        this.settled = true;
        this.targetAllowedPlayer();
      }, 1000);
    }
  }

  // ask target to choose card after Assassination or Coup
  promptTargetForKillChoice() {
    if (this.currentTarget.cards.length <= 0) {
      this.endTurn();
      return
    }
    if (this.currentPlayer.isComputer) {
      let announcement = computerPlayerMessage(`${this.action}`);
      this.currentPlayer.renderControls(announcement);
      let killForm = loseCardSelector('action', this.currentTarget);
      this.currentTarget.renderControls(killForm);
      killForm.addEventListener('submit', (e) => {
        e.preventDefault();
        killForm.remove();
        this.domState = this.domState.refresh();
        this.killIdx = this.domState.killIdx;
        this.endTurn();
      })
    } else {
      let announcement = computerPlayerMessage(`Choosing influence to lose`);
      this.currentTarget.renderControls(announcement);
      setTimeout(() => {
        this.killIdx = this.currentTarget.randKillIdx()
        this.endTurn();
      }, 1000)
    }
  }

  // ask player to choose return cards after Exchange
  promptPlayerForExchangeChoice() {
    if (this.currentPlayer.isComputer) {
      let announcement = computerPlayerMessage(`Choosing influences to return`);
      this.currentPlayer.renderControls(announcement);
      const [idx1, idx2] = this.currentPlayer.randExchangeIdx();
      setTimeout(() => {
        this.currentPlayer.exchangePartTwo(idx1, idx2);
        this.endTurn();
      }, 1000);
    } else {
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