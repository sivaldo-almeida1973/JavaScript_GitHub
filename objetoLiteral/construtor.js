function Account(username, accountNumber, initialBalance ) {
  this.mane = username,
  this.accountNumber = accountNumber,
  this.balance = initialBalance,
  this.displayBalance = function () {
    console.log(`account number ${this.accountNumber} has a total balance of $( tihi
      of ${this.balance}`);
  };
}

const account1 = new Account('sivaldo vieira', '123456-10', 300000);
console.log(account1)
account1.displayBalance();