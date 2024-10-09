//Classes em javascript

class BankAccount {
  constructor(persoName, initialBalance, address) {
    this.persoName = persoName;
    this.balance = initialBalance;
    this.address = address;

  }

  printInfo() {
    console.log(`Essa conta pertence a ${this.persoName}, residente no endereço ${this.address}, e seu saldo na conta é de ${this.initialBalance} reais!`);
  }
}

const ba1 = new BankAccount('Sivaldo', 30000, 'Rua brasilia')
console.log(ba1);
console.log(typeof ba1);
console.log(ba1 instanceof BankAccount);