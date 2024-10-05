// Exercício 1: Callback Simples
// Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
// (callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de
// chamada.


const imprimirMensagem = (message, callback) => {
  console.log(message);
  callback();
}

imprimirMensagem("mensagem de teste", () => {
  console.log("Essa é uma mensagem de uma callback!")
})

imprimirMensagem("mensagem de teste", () => {
  console.log(`Soma: ${2+3}`)
})