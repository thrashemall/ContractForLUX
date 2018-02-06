var LUXCoinCrowdsale = artifacts.require("LUXCoinCrowdsale");

contract("LUXCoinCrowdsale", function(accounts) {
  it("Test", function() {
    const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 * 60 * 60 * 24 * 30; // one second in the future
    const endTime = startTime + (86400 * 20); // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[0]
    const goal = web3.toWei(250, 'ether');
    const cap = web3.toWei(400, 'ether');
    // var luxoincrowdsale;
    // var account1 = accounts[0];
    // var money = web3.toWei(20,"ether");
    return LUXCoinCrowdsale.deployed().then(function(instance) {
      luxoincrowdsale = instance;
      return luxoincrowdsale.
      // return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      console.log(balance)
      // assert.equal(balance, false, "test balance value");
    }); 
  });
});

// account1 = web3.eth.accounts[1]
// LUXCoinCrowdsale.deployed().then(inst =>
//    crowdsale = inst 
// )
// crowdsale.token().then(addr =>
//   tokenAddress = addr 
// )
// LUXCoinInstance = LUXCoin.at(tokenAddress)
// LUXCoinInstance.balanceOf(account1)
// LUXCoinInstance.balanceOf(account1).then(balance => 
//   account1GusTokenBalance = balance.toString(10)
// )
// LUXCoinCrowdsale.deployed().then(inst =>
//   inst.sendTransaction({ from: account1, value: web3.toWei(5, "ether")})
// )

// LUXCoinCrowdsale.deployed().then(function(instance) {console.log(instance)})