require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const PROJECT_ID = '767afbdaf45241ae9a4c41b83a91332d'

module.exports = {
  solidity: "0.8.4",
  networks:{
    hardhat:{
     chainId:1337
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts:[privateKey]
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts:[privateKey]
    },
  }
};
