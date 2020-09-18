import { clearDataset, getDataset } from '../util/dom_nodes_util'

export default class DOMState {
  constructor() {
    this.rootEl = document.getElementById('game');
    this.rootId = 'game';
    this.killIdx = null;
    this.playerWasBlocked;
    this.playerWasChallenged = false;
    this.targetLostChallengeIdx = null;
    this.targetWasChallenged = false;
    this.playerLostChallengeIdx = null;
    this.refresh = this.refresh.bind(this);
    this.getPlayerWasBlocked = this.getPlayerWasBlocked.bind(this);
    this.getPlayerWasChallenged = this.getPlayerWasChallenged.bind(this);
    this.getTargetWasChallenged = this.getTargetWasChallenged.bind(this);
  }

  getPlayerWasBlocked() {
    this.playerWasBlocked = Boolean(this.gameRootDataset.playerWasBlocked == 'true');
  }

  getPlayerWasChallenged() {
    this.playerWasChallenged = Boolean(this.gameRootDataset.playerWasChallenged == 'true');
  }

  getTargetWasChallenged() {
    this.targetWasChallenged = Boolean(this.gameRootDataset.targetWasChallenged == 'true');
  }

  refresh() {
    this.rootEl = document.getElementById(this.rootId);
    this.gameRootDataset = getDataset(this.rootEl);
    clearDataset(this.rootEl);
    this.getPlayerWasBlocked();
    this.getPlayerWasChallenged();
    this.getTargetWasChallenged();
    this.playerLostChallengeIdx = Number(this.gameRootDataset.killIdx);
    this.targetLostChallengeIdx = Number(this.gameRootDataset.killIdx);
    this.killIdx = Number(this.gameRootDataset.killIdx);
    this.exchangeIndices = this.gameRootDataset.exchangeIndices ? JSON.parse(this.gameRootDataset.exchangeIndices) : [];
    return this;
  }
}