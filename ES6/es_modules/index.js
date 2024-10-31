//ES Modules

import { Car,  numberOfTires } from "./car.js";

function createCars() {
  const car1 = new Car('Toyota', 'Corolla', 2022);
  const car2 = new Car('Toyota', 'Corolla', 2022);


  car1.turnOn();
  car2.turnOn();


  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car1.turnOff();

  console.log('Number',numberOfTires)
}



const buttonElement = document.getElementById('run-fucntion');

buttonElement.addEventListener('click', createCars);