// Exercício 4: Encadeamento de Promises
// Crie duas Promises: uma que seja resolvida para "Olá" após um atraso de 1 segundo e outra que seja resolvida para "Mundo" após um atraso de 2 segundos. Encadeie essas Promises usando .then() para imprimir "Olá, Mundo" no console.

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve('Olá'), 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve('Mundo!'), 2000);
});

p1.then((result1) =>
p2.then((result2) => {
  console.log(`${result1} , ${result2}`);

}));

