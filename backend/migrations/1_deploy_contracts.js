//1_deploy_contracts.js
const ColdChain = artifacts.require('ColdChain');

module.exports = function(deployer) {
  deployer.deploy(ColdChain);
};
