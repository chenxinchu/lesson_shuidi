const UUID = require('uuid'); 

var Wallet = (function() {
  var id,createTime,balance, balanceLastModifiedTime; 
  return function() { //闭包
    id = UUID.v1().replace(/-/g, "");
    createTime = + new Date();
    balance = 0;
    balanceLastModifiedTime = +new Date();

    function checkAmount(amount) {
      if (isNaN(amount)) { //意思
        return false
      }
      return true;
    }

    return { //public 
      desc: '钱包',
      getId: function() {
        return id;
      },
      getCreateTime: function() {
        return createTime;
      },
      getBalanceLastModifiedTime: function() {
        return balanceLastModifiedTime;
      },
      getBalance: function() {
        return balance;
      },
      increaseBalance: function(increasedAmount) {
        if (!checkAmount(increasedAmount)) {
          throw new Error('发生错误');
        }
        balance += increasedAmount;
        balanceLastModifiedTime = +new Date();
      },
      decreateBalance: function(decreasedAmount) {
        if (!checkAmount(decreasedAmount)) {
          throw new Error('错误的金额')
        }
        if (decreasedAmount > this._balance) { 
          throw new Error('没有足够的钱');
        }
        balance -= decreasedAmount;
        balanceLastModifiedTime = +new Date();
      }
    }
  }
})()

const myWallet = new Wallet();
console.log(myWallet.id);
console.log(myWallet.getId());
myWallet.increaseBalance(200);
myWallet.decreateBalance(99);
console.log(myWallet.getBalance());
console.log(myWallet.getBalanceLastModifiedTime());
console.log(myWallet instanceof Wallet);

