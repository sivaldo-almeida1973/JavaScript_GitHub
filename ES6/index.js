//CommonJS
//import do arquivo car.js
const Car = require('./car');

function createCars() {
  const car1 = new Car('Toyota', 'Corolla', 2022);
  const car2 = new Car('Toyota', 'Corolla', 2022);


  car1.turnOn();
  car2.turnOn();


  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car1.turnOff();
}

createCars();

// const buttonElement = document.getElementById('run-funtion');

// buttonElement.addEventListener('click', cerateCars);