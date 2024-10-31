

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngneOn = false;
  }

  turnOn() {
    this.isEngneOn = true;
    console.log('Engine is now running.');
  }

  turnOff() {
    this.isEngneOn = false;
    console.log('Engine has been turned off.');

  }

  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

//CommonJS, exportar o codigo que quero passar
module.exports = Car;