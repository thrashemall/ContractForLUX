var LUXCoinCrowdsale = artifacts.require("LUXCoinCrowdsale");

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 * 60 * 60 * 24 * 30 // one second in the future
  const endTime = startTime + (86400 * 20) // 20 days
  const rate = new web3.BigNumber(1000)
  // const moneyRaised = new web3.BigNumber(1000 * 1000)
  const wallet = accounts[0]
  const goal = web3.toWei(250, 'ether');
  const cap = web3.toWei(4000, 'ether');
  console.log(startTime, endTime, rate,cap , wallet)
  deployer.deploy(LUXCoinCrowdsale, startTime, endTime, rate, wallet);

};