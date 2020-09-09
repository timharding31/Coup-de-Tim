export default (tag, props, ...children) => {
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name === 'text') {
      element.innerHTML = value;
    } else if (name.startsWith('on') && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substring(2), value);
    } else {
      element.setAttribute(name, value.toString());
    }
  });
  for (let child of children) {
    if (!child) continue;
    element.appendChild(child);
  }
  return element;
}