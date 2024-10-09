function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.address = address;

  
this.printInfo = function() {
  console.log(`Essa conta pertence a ${this.personName}, residente no endereço ${this.address} e possui um saldo atual de ${Number(this.initialBalance).toFixed(2)} reais`)
}

}

const ba1 = new BankAccount('sivaldo', 20000, 'Rua brasilia');
ba1.printInfo();
console.log( ba1 instanceof BankAccount);