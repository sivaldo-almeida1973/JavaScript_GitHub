//Função fábrica = factory Fnction
function createAccount(username, accountNumber, initialBalance) {
 return {
  name: username,
  accountNumber: accountNumber,
  balance: initialBalance,
  displayBalance: function () {
    console.log(`account number
       ${this.accountNumber} has a total balance of ${this.balance}`);
  }
 }
}

const account1 = createAccount('sivaldo vieira', '123456-10', 5000);
console.log(account1);
account1.displayBalance();



const account2 = createAccount('Lucas', '123456-11', 100000);
console.log(account2);
account2.displayBalance();


const account3 = createAccount('Lucas', '123456-11', 9990000);
console.log(account3);
account3.displayBalance();