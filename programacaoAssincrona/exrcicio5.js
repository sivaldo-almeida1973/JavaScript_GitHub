// Exercício 5: Tratamento de Erros com Promises
// Crie uma Promise que seja rejeitada com um erro após um atraso de 1 segundo. Use .catch() para lidar com o
// erro e imprimir no console.

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Falha ao cumprir a "Promise');
  },1000);
});

p.then(console.log).catch(console.error);