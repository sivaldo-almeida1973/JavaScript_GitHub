
//importação das funções com - ES - Modules -Named Exports
import {add, subtract,multiply} from "./mathOperations.js";


//simulação de input /entrada do usuário
const a = 10;
const b = 5;

//usando a s funções importadas para calcular
// const sum = mathOperations.default.add(a, b);
// const difference = mathOperations.default.subtract(a, b);
// const product = mathOperations.default.multiply(a, b);


//outra forma de importar
const sum = add(a, b);
const difference = subtract(a, b)
const product =  multiply(a, b)


//exibir so resultados
console.log(`A soma de ${a} e ${b}: ${sum}`)
console.log(`A subtração de ${a} e ${b}: ${difference}`)
console.log(`A multiplicação de ${a} e ${b}: ${product}`)



