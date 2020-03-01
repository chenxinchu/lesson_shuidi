const UUID = require('uuid');

var Wallet = (function () {
  var privateData = new WeakMap();
  function Wallet() {
    privateData.set(this, {
      id: UUID.v1().replace(/-/g, ""),
      createTime: new Date(),
      balance: 0,
      balanceLastModifiedTime: +new Date()
    })
  }

  function checkAmount(amount) {
    if (isNaN(amount)) { //意思
      return false
    }
    return true;
  }

  Wallet.prototype.getId = function () {
    return privateData.get(this).id;
  }
  Wallet.prototype.getCreateTime = function () {
    return privateData.get(this).createTime;
  }
  Wallet.prototype.getBalanceLastModifiedTime = function () {
    return privateData.get(this).balanceLastModifiedTime;
  }
  Wallet.prototype.getBalance = function () {
    return privateData.get(this).balance;
  }

  Wallet.prototype.increaseBalance = function (increasedAmount) {
    if (!checkAmount(increasedAmount)) {
      throw new Error('发生错误');
    }
    privateData.get(this).balance += increasedAmount;
    privateData.get(this).balanceLastModifiedTime = +new Date();
  }
  Wallet.prototype.decreateBalance = function (decreasedAmount) {
    if (!checkAmount(decreasedAmount)) {
      throw new Error('错误的金额')
    }
    if (decreasedAmount > privateData.get(this).balance) {
      throw new Error('没有足够的钱');
    }
    privateData.get(this).balance -= decreasedAmount;
    privateData.get(this).balanceLastModifiedTime = +new Date();
  }
  return Wallet;
}());

const myWallet = new Wallet();
console.log(myWallet.id);
console.log(myWallet.getId());
myWallet.increaseBalance(200);
myWallet.decreateBalance(99);
console.log(myWallet.getBalance());
console.log(myWallet.getBalanceLastModifiedTime());
console.log(myWallet instanceof Wallet);