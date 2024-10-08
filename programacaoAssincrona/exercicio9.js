// Exercício 9: Async/Await com Promise.all()
// Escreva uma função assíncrona buscarMultiplosDados que usa Promise.all() e await para buscar dados de várias APIs simultaneamente. Imprima o array de dados buscados no console.

async function buscarMultiplosDados() {
  const result = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados1 !");
      }, 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dados2 !");
      }, 1500);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dados3 !");
      }, 2000)
    })
  ]);
  console.log(result);
}

buscarMultiplosDados();