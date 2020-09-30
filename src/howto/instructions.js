import createElement from '../util/create_element';
import { removeAllChildNodes } from '../util/dom_nodes_util';
import createSlide from './slide';

export default class Instructions {
  constructor(rootEl) {
    this.rootEl = rootEl;
    removeAllChildNodes(rootEl);
    let instructionsRoot = createElement('div', { id: 'instructions' });
    rootEl.appendChild(instructionsRoot);
    this.topics = ['intro', 'influence', 'cards', 'gameplay', 'actions', 'general-actions', 'character-actions', 'counteractions', 'character-counteractions', 'challenges'];
    this.topics.forEach((topic, idx) => {
      let slide = createSlide(topic);
      if (idx === 0) slide.className = 'visible';
      instructionsRoot.appendChild(slide);
    })
  }
}