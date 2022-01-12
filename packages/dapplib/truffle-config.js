require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember around grid arm blue giggle'; 
let testAccounts = [
"0xb018f1c635a33bb8f64a0403cc07974413674373043a9b7045fb9f33f27a4873",
"0xbf30f424316e2150c567b92f5ee80f0675ada99135c6d1ae3b046eb40b4ace2c",
"0x658a7bf1f9fdd4b479b973e5c575db497f00c3479c3cbb46c401954a029b707e",
"0xdb0e1ef8996ff6b5ba2f362f51581c54a4e2df16db248be5df5f025cc6bb39ec",
"0x65f1e56e974223d08dad98a89cdb79351e55cc7d14da321dfe1d6d39adf6b75b",
"0xed80688e2de5122e9ea5738124c6dc826557282b6d105a662d1a81377c6aa581",
"0x9cdb0086ba1d3fe40d22b002d1ae541df3282a321d4a41011bd2a485e0bf7c68",
"0xe5172bd66d8919f2999d120aabe2a0429ca5a689cf6ac04c43d63b543695d46d",
"0xdb6325e266fc7a3cad9d8d4a0e09875516d202e7f06675f6b189482eafd0d895",
"0x06bb975fc361f16dcc695a07d5a9c873c6a796e0d7e87ff61c6318df6c0185f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


