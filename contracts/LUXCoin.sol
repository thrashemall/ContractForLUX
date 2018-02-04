pragma solidity ^0.4.13;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract LUXCoin is MintableToken {
  string public name = "LUX COIN";
  string public symbol = "LUX";
  uint8 public decimals = 18;
}