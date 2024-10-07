// Async/Await:
// Exercício 7: Async/Await Básico
// Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após um atraso de 2 segundos. Imprima os dados buscados no console.

function pegardadosNaAPI(nomeDoUsuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nome: nomeDoUsuario,
        age: Math.floor(80* Math.random()),
        favorite_programming_language: 'javaScript',
      });
    }, 2000);
  })
}

async function buscarDados(nomeDousuario) {
  const resposta = await pegardadosNaAPI(nomeDousuario);
  console.log(resposta);
  
}

buscarDados('sivaldo');

