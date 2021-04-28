require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strike rival magic artwork hover arctic metal genuine'; 
let testAccounts = [
"0x22c90342d803af3e6bc13629fe8c1d18db04090cd17403756804b471e3f880f0",
"0x81d24fd7eb28e983ac41674b9ba9b8aa1797df065dc619b45d74c534b1b1c289",
"0x5745c48baf69be0d5a3302e5968c45e86ad2ab7c02827ecec12cb10b647f88b7",
"0xeca271f3b33e48589995ec45498d445851162dc0ce7696c4e37f1dcc5c05bff4",
"0x52d33472df8cceaa8ecf836c8c11fbf649c9314f19e9c27e2498e35069ee30f1",
"0x0ede431c81df6fdc465615d03aa95e9ee68eaa7f3c228ffdf147f9ee8e2ecf0c",
"0x2c4b0be0487ac630ea52c50d381473bb4c15e522cdc9e193ac75bbad86ece957",
"0xa56482686c9f332ec246ddccb48efceae358e5dbeee99dfd0eea0816f5dbdf37",
"0x17f6f5401abe34e80249a3cba95d0d9647b50cfcb1125eda8774c3a7d871b947",
"0xc7e6749f065a70f92043c88ebfe073a142289cdd084e8bb99392ac60d3eb4d0d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
