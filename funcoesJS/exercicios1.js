// Exercício 1: Você é responsável por atualizar os salários de todos os funcionários de uma empresa. A empresa decidiu aumentar o salário de todos em 10%. Crie um array com os salários atuais e utilize o método .map() para calcular o novo salário de cada funcionário. Qual será o array resultante?


//Exemplo de Entrada: // [3000, 4500, 5000, 6000, 7500];
//Exemplo de Saída: // [3300, 4950, 5500, 6600, 8250];

// let novoArray = arrayOriginal.map(callback(elemento, indice, array));


const salarios =  [3000, 4500, 5000, 6000, 7500];


//map gera um novo array, por tem que armazenar em uma variavel

//------tofixed limita as casas decimais, Number(coverter string e numeros)-------

// const novosSalarios = salarios.map((salario) => Number((salario * 1.1).toFixed(2)));

//Math.round faz o mesmo metodos de cima
const novosSalarios = salarios.map((salario) => Math.round(salario * 1.1));


console.log("Salario Atual",salarios);
console.log("Salarios Corrigidos:",novosSalarios);