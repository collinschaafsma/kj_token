
const zos = require('zos');
const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .use(require('chai-as-promised'))
  .should();

const KilojoulToken = artifacts.require('KilojoulToken')

contract('KilojoulToken', function ([owner, ...accounts]) {



  beforeEach(async function () {
    this.app = await zos.TestApp('zos.json', { from: owner })

    this.token = await KilojoulToken.new();
    await this.token.initialize(owner);
  });

  it('should create a proxy for the stdlib', async function () {
    const proxy = await this.app.createProxy(KilojoulToken);
    const result = await proxy.totalSupply();
    result.toNumber().should.eq(0);
  })

  it('should mint a token', async function () {
    const result = await this.token.mint(owner, 2);
    console.log(result);
    //result.should.eq(true);


    //const proxy = await this.app.createProxy(KilojoulToken);
    // let owner = await this.token.owner();
    // console.log(owner);
    //
    // assert.equal(owner, accounts[0]);
  })
});
