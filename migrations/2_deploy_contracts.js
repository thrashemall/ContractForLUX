var LUXCoin = artifacts.require("LUXCoin.sol");
var LUXCoinCrowdsale = artifacts.require("LUXCoinCrowdsale.sol");
// var CappedCrowdsale = artifacts.require("CappedCrowdsale.sol");
var Crowdsale = artifacts.require("Crowdsale.sol");
module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 * 60 * 60 * 24 * 30; // one second in the future
  const endTime = startTime + (86400 * 20); // 20 days
  const rate = new web3.BigNumber(1000);
  // const moneyRaised = new web3.BigNumber(1000 * 1000)
  // const coin = LUXCoinCrowdsale.createTokenContract()
  // const token = LUXCoinCrowdsale().createTokenContract()
  // LUXCoinCrowdsale.deployed().then(function(instance) {
  //   console.log("1")
  //   console.log(instance)
  //   token = instance.balance.call();
  // }).then(function(balance) {
  //   console.log("2")
  //   console.log(balance);
  // });
  const wallet = accounts[0]
  const goal = web3.toWei(250, 'ether');
  const cap = web3.toWei(400, 'ether');
  deployer.deploy(Crowdsale, startTime, endTime, rate, wallet)
  // deployer.link(Crowdsale, CappedCrowdsale)
  // deployer.deploy(CappedCrowdsale,cap)
  deployer.deploy(LUXCoin)
  deployer.link(LUXCoin,LUXCoinCrowdsale)
  console.log(startTime, endTime, rate,cap , wallet)
  deployer.deploy(LUXCoinCrowdsale, startTime, endTime, rate,cap, wallet);

};