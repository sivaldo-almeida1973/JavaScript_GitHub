//Simular o ambiente
process.env.NODE_ENV = 'production';
// process.env.NODE_ENV = 'development';

//importação das funções comES Modules
// import * as mathOperations from "./mathOperations.js";

//outra forma de importar
import math from "./mathOperations.js"
import { multiply } from "./mathOperations.js";


//simulação de input /entrada do usuário
const a = 10;
const b = 5;

//usando a s funções importadas para calcular
// const sum = mathOperations.default.add(a, b);
// const difference = mathOperations.default.subtract(a, b);
// const product = mathOperations.default.multiply(a, b);


//outra forma de importar
const sum = math.add(a, b);
const difference = math.subtract(a, b);
const product = multiply(a, b);


//exibir so resultados
console.log(`A soma de ${a} e ${b}: ${sum}`)
console.log(`A subtração de ${a} e ${b}: ${difference}`)
console.log(`A multiplicação de ${a} e ${b}: ${product}`)



