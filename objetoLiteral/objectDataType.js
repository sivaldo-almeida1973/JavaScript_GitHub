function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.address = address;

}

const acc1 = new BankAccount('Sivaldo', 20000, 'rua brasilia');
console.log(acc1);
console.log(typeof acc1);


const acc2 = new BankAccount('Lucas', 280000, 'rua brasilia');
console.log(acc2);
console.log(typeof acc2);