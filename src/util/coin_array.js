import createElement from './create_element';
const coin = require('../images/coin.png');

const createCoin = () => createElement('div', { id: 'coin', style: `background-image: url("${coin.default}");` });

const coinArray = [];

while(coinArray.length < 50) coinArray.push(createCoin());

export default coinArray;