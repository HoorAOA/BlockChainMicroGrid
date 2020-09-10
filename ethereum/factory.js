import web3 from './web3';
import ExchangeFactory from './build/ExchangeFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(ExchangeFactory.interface),
    '0xE8e4Dec9c55274E366d35ed1Bd2FbB09cEcB12fD'
);
export default instance;