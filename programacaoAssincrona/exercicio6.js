// Exercício 6: Promise All
// Crie três Promises: uma que seja resolvida para "Um" após um atraso de 1 segundo, outra que seja resolvida para "Dois" após um atraso de 2 segundos e uma terceira que seja resolvida para "Três" após um atraso de 3 segundos. Use Promise.all() para aguardar a resolução de todas as Promises e, em seguida, imprima o array de valores resolvidos no console.

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve('Um'), 1000);

});


const p2 = new Promise((resolve) => {
  setTimeout(() => resolve('Dois'), 2000);

});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve('Tres'), 3000);

});


const results = Promise.all([p1,p2,p3]);

// results.then(console.log);

results.then((data) => console.log(data));