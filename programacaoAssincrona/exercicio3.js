// Exercício 3: Conceitos Básicos de Promises
// Crie uma nova Promise que seja resolvida após um atraso de 1 segundo e retorne a string "Promise resolvida". Use .then() para lidar com o valor resolvido e imprimir no console.

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise resolvida!');
  }, 1000);
});

p1.then(console.log)

