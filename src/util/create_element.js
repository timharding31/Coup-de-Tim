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
  children.forEach(child => {
    if (!child) return;
    element.appendChild(child);
  });
  return element;
}