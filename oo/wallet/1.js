const UUID = require('uuid'); 

class Wallet {
  constructor(){
    this._id = UUID.v1().replace(/-/g, ""); // 唯一id
    this._createTime = + new Date(); // 账户创建时间
    this._balance = 0 // 金额 初始值 
    this._balanceLastModifiedTime = +new Date(); // 金额修改时间
  }
  
  getId() {
    return this._id;
  }
  getBalance() {
    return this._balance; 
  }
  getCreateTime() { 
    return this._createTime;
  }
  getBalanceLastModifiedTime() { 
    return this._balanceLastModifiedTime;
  }

  
  increaseBalance(increasedAmount) {
    this._balance += increasedAmount;
    this._balanceLastModifiedTime = + new Date();
  }
  decreaseBalance(decreasedAmount) {

    if (decreasedAmount > this._balance) { // 花不起
      throw new Error('没有足够的钱');
    }
    this._balance -= decreasedAmount;
  }
}

const myWallet = new Wallet();
console.log(myWallet.getCreateTime());
console.log(myWallet.id);
myWallet.increaseBalance(50);
console.log(myWallet.getBalance());
myWallet.decreaseBalance(20);
console.log(myWallet.getBalance());
console.log(myWallet.getBalanceLastModifiedTime());

console.log(myWallet.getId());


