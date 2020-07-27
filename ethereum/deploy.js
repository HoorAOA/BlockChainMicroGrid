const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ExchangeFactory.json');

const provider = new HDWalletProvider(
    'route embrace pumpkin hole then please spice fabric above lottery health ask',
    'https://rinkeby.infura.io/v3/12f8b2cb4e2944198d968eda37324a77'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : '0x' + compiledFactory.bytecode })
    .send({ gas : '1000000', from : accounts[0]});

    console.log('Contract deployed to', result.options.address);
};

//contract address 0x83fcf01a5652766093539B5267f1bc79b85995Bf
//0x50Ab98f9D08B3064491E74687C4ce87B1088557c


deploy();