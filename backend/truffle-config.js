require('dotenv').config();
const mnemonic = process.env["MNEMONIC"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraProjectId}`),
      network_id: 11155111,  // Sepolia's id
      gas: 3000000,          // Lower gas limit if needed
      gasPrice: 20000000000, // 20 Gwei (default value is usually around this)
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000 // Increase network timeout
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  }
};

/*
anchor
crime
lion
bench
budget
mirror
group
rather
muscle
topple
post
alpha
*/