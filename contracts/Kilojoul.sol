pragma solidity ^0.4.23;

import "./KilojoulToken.sol";
import "openzeppelin-zos/contracts/math/SafeMath.sol";

contract Kilojoul {

  using SafeMath for uint256;

  KilojoulToken public token;

  function getTokens(uint256 _kilojoules) public payable {
    token.mint(msg.sender, _kilojoules);
  }
}
