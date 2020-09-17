import createElement from './create_element';
const coinImg = require('../assets/images/coin.png');

export default (boxSize) => {
  let coin;
  if (boxSize) {
    coin = createElement('div',
      {
        class: 'coin',
        id: `coin-${Math.random()}`,
        style: `background-image: url("${coinImg.default}");
            position: absolute;
            left: ${(Math.random() * boxSize)}px;
            top: ${(Math.random() * boxSize)}px;`
      }
    );

  } else {
    coin = createElement('div',
      {
        class: 'coin',
        id: `coin-${Math.random()}`,
        style: `background-image: url("${coinImg.default}");`
      }
    );
  }
  
  return coin;
}