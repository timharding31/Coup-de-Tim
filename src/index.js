import './application.scss';

const root = () => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  const header = document.createElement('h1');
  const headerTxt = document.createTextNode('Coup de Tim');
  header.appendChild(headerTxt);
  root.appendChild(header);
  return root;
}

document.body.appendChild(root());