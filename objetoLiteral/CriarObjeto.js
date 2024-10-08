const account1 = {
  name: 'sivaldo vieira',
  accountNumber: '12345678-9',
  balance: 500,
  displayBalance: function () {
    console.log(`account number
       ${this.accountNumber} has a total balance of ${this.balance}`);
  }

}

const account2 = {
  name: 'Lucas',
  accountNumber: '12345678-11',
  balance: 500000,
  displayBalance: function () {
    console.log(`account number
       ${this.accountNumber} has a total balance of ${this.balance}`);
  }

}

const account3 = {
  name: 'Alice ',
  accountNumber: '12345678-10',
  balance: 5000,
  displayBalance: function () {
    console.log(`account number
       ${this.accountNumber} has a total balance of ${this.balance}`);
  }

}

console.log(account1);
account1.displayBalance();

console.log(account2);
account2.displayBalance();

console.log(account3);
account3.displayBalance();

