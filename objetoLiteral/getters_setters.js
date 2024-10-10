class BankAccount {
  _balance = 0;

  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this._balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
      throw new Error('Não permitimos saques ou depositos maiores que 2000 reais!')
    }
    this._balance = value;

  }
  
  printInfo() {
  console.log(`Essa conta pertence a ${this.personName}, residente no endereço ${this.address} e possui um saldo atual de ${Number(this._balance).toFixed(2)} reais`)
 }

}

const ba1 = new BankAccount('sivaldo', 20000, 'Rua brasilia');

// ba1.balance = ba1.balance + 4000;
// ba1.balance = ba1.balance - 3000;
ba1.balance = ba1.balance - 2000;

console.log(ba1);





//getters (pegar) e setters(definir)