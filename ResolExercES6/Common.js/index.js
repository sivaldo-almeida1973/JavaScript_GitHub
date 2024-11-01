//importar as funções do arquivo mathOperations.js
const mathOperations = require('./mathOperations');


//simulação de input /entrada do usuário
const a = 10;
const b = 5;

//usando a s funções importadas para calcular
const sum = mathOperations.add(a, b);
const difference = mathOperations.subtract(a, b);


//exibir so resultados
console.log(`A soma de ${a} e ${b}: ${sum}`)
console.log(`A subtração de ${a} e ${b}: ${difference}`)

