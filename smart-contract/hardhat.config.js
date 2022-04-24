require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CCP-rHyXeXhyu5p2fEOjEi8M5iETafKd',
      accounts: ["6507051488857443be4cb20a2cee59d43b202d9d23350903946e32720f89fe47"]
    }
  }
};
