pragma solidity ^0.4.17;

// import './Crowdsale.sol';
import './LUXCoin.sol';
// import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "./CappedCrowdsale.sol";
// import "zeppelin-solidity/contracts/crowdsale/Crowdsale.sol";

contract LUXCoinCrowdsale is CappedCrowdsale {
  function LUXCoinCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet, MintableToken _token) public 
    CappedCrowdsale(_cap)
    Crowdsale(_startTime, _endTime, _rate, _wallet, _token)
  {
  }
  function createTokenContract() internal returns (MintableToken) {
    return new LUXCoin();
  }
}