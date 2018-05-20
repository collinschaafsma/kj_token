
const zos = require('zos');
const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .use(require('chai-as-promised'))
  .should();

const KilojoulToken = artifacts.require('KilojoulToken')

contract('KilojoulToken', function ([owner, ...accounts]) {

  const minter = owner;


  beforeEach(async function () {
    this.app = await zos.TestApp('zos.json', { from: owner })

    this.token = await KilojoulToken.new();
    await this.token.initialize(owner);
  });

  it('should create a proxy for the stdlib', async function () {
    const proxy = await this.app.createProxy(KilojoulToken);
    const result = await proxy.totalSupply();
    result.toNumber().should.eq(0);
  });

  it('sets the correct owner', async function () {
    const tokenOwner = await this.token.owner({ from: owner });
    tokenOwner.should.equal(owner);
  });

  it('should mint a token from the sender', async function () {
    const amount = 100;
    const from = minter;

    await this.token.mint(owner, amount, { from });
    const balance = await this.token.balanceOf(owner);
    assert.equal(balance, amount);
  })
});
