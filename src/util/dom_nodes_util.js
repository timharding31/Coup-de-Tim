export const removeAllChildNodes = parent => {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
}

export const clearDataset = element => {
  let datasetKeys = Object.keys(Object.assign({}, element.dataset));
  datasetKeys.forEach(key => {
    element.dataset[key] = '';
  })
}

export const getDataset = element => {
  let dataset = Object.assign({}, element.dataset);
  return dataset;
}