export const removeAllChildNodes = parent => {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
}