//ES Modules, usar a extensao .mjs para O Node

import ClasseCarro,{ numberOfTires } from "./car.js";

function createCars() {
  const car1 = new ClasseCarro('Toyota', 'Corolla', 2022);
  const car2 = new ClasseCarro('Toyota', 'Corolla', 2022);


  car1.turnOn();
  car2.turnOn();


  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car1.turnOff();

  console.log('Number',numberOfTires)
}

createCars();

// const buttonElement = document.getElementById('run-function');

// buttonElement.addEventListener('click', createCars);