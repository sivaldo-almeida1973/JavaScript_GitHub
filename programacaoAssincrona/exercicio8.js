// Exercício 8: Tratamento de Erros com Async/Await
// Escreva uma função assíncrona obterDados que usa await para buscar dados de uma API após um atraso de 1 segundo. Se ocorrer um erro, capture-o e imprima uma mensagem de erro no console.

function buscarDados() {
  return new Promise((resolve, reject) => {
    const numeroAleatorioEntre0e1 = Math.random();
    if(numeroAleatorioEntre0e1 >= 0.5) {
      resolve({
        color: "#51f",
        shape: "rectagule",
      });
    }
    reject(new Error("Error obtaining data"));
  });
}

async function obeterDados() {
  try{
    const data = await buscarDados();
    console.log(data);
  }catch (error) {
    console.error(error.message);
  } 
}


obeterDados();