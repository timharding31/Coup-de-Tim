import createElement from './create_element';

export default (symbol, action, effect) => {
  const tooltipAction = createElement('p', { class: 'tooltip-action', text: action });
  const tooltipEffect = createElement('p', { class: 'tooltip-effect', text: effect });
  const tooltipText = createElement('div', { class: 'tooltip-text' }, tooltipAction, tooltipEffect);

  return [createElement('div', { class: 'turn-action-icon', style: `background-image: url("${symbol}");` }), tooltipText];
}