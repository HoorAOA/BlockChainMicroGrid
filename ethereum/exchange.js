import web3 from './web3';
import Exchange from './build/Exchange.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Exchange.interface),
        address
    )
}