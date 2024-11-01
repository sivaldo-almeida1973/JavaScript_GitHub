//Simular o ambiente
// process.env.NODE_ENV = 'production';
// process.env.NODE_ENV = 'development';

//importação das funções comES Modules
import * as mathOperations from "./mathOperations.js";



//simulação de input /entrada do usuário
const a = 10;
const b = 5;

//usando a s funções importadas para calcular
const sum = mathOperations.add(a, b);
const difference = mathOperations.subtract(a, b);
const product = mathOperations.multiply(a, b);


//exibir so resultados
console.log(`A soma de ${a} e ${b}: ${sum}`)
console.log(`A subtração de ${a} e ${b}: ${difference}`)
console.log(`A multiplicação de ${a} e ${b}: ${product}`)



