import Turn from './turn';

export default class Income extends Turn {
  constructor(rootEl, game, turnCallBack, action, challengeable, blockable) {
    super(rootEl, game, turnCallBack, action, challengeable, blockable);
  }
}