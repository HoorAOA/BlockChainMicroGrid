import Web3 from 'web3';
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
    web3 = new Web3(window.web3.currentProvider);
}
else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/12f8b2cb4e2944198d968eda37324a77'
    );
    web3 = new Web3(provider);
}
// const web3 = new Web3(widow.web3.currentProvider);

export default web3;