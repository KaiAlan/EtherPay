//https://eth-sepolia.g.alchemy.com/v2/hfXI4VqPyBFIJwaxltptQqGHHoPCzogs


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/hfXI4VqPyBFIJwaxltptQqGHHoPCzogs',
      accounts: [ 'e267c238b0133a11d116e001d53e385cf0ebf8efbacb6242cea29cdec70a0b35'], 
    }
  }
}