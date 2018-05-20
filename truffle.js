require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6500000,
    },
    rinkeby_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY)
      },
      network_id: 4,
      gas: 4500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
