//ES Modules

export const numberOfTires = 4;


export class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngneOn = false;
  }
  //ligar
  turnOn() {
    this.isEngneOn = true;
    console.log('Engine is now running.');
  }
  //desligar
  turnOff() {
    this.isEngneOn = false;
    console.log('Engine has been turned off.');

  }
  //retorna informacoes
  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }

  
}

// CommonJS, exportar o codigo que quero passar
// module.exports = Car;