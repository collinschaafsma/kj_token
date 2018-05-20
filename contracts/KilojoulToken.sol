pragma solidity ^0.4.23;

import "openzeppelin-zos/contracts/token/ERC20/MintableToken.sol";

contract KilojoulToken is MintableToken {
  string public symbol;
  string public  name;
  uint8 public decimals;
  uint public _totalSupply;
  uint256 public x;

  function initialize(uint256 _x) isInitializer("KilojoulToken", "0") public {
    x = _x;
    symbol = "KJT";
    name = "Kilojoul Token";
    decimals = 2;
    _totalSupply = 100000000000000000000000000;
  }
}
