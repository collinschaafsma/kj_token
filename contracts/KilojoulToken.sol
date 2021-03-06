pragma solidity ^0.4.23;

import "openzeppelin-zos/contracts/token/ERC20/MintableToken.sol";

contract KilojoulToken is MintableToken {
  string public constant symbol = "KJT";
  string public constant name = "Kilojoul Token";
  uint8 public constant decimals = 18;
  uint256 public x;

  function initialize(uint256 _x) isInitializer("KilojoulToken", "0") public {
    x = _x;
  }
}
