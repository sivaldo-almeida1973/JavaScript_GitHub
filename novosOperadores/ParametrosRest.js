//A função sum utiliza o operador de espalhamento (...) para aceitar um número variável de argumentos, que são armazenados no array parcels.

function sum(...parcels) {
  //O método reduce é usado para somar todos os valores do array parcels. Ele itera sobre cada elemento do array, acumulando o resultado em acumulador, começando com o valor inicial 0.
  return parcels.reduce((acumulador, currentValue) => acumulador + currentValue, 0)
  
};

console.log(sum(2,3,));
console.log(sum(2,3,4));
console.log(sum(2,3,4,5,6,7,8,9));

//Em resumo, a função sum permite somar um número variável de argumentos, utilizando o método reduce para acumular a soma dos valores





