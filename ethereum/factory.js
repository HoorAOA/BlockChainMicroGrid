import web3 from './web3';
import ExchangeFactory from './build/ExchangeFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(ExchangeFactory.interface),
    '0x473781C7353577f87AA3162A3153F1a63cAC839B'
);

export default instance;