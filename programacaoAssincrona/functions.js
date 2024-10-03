//Funcao anonima (funcao sem nome) que executa outra funcao

setTimeout(function () {
  writeThisMessageOnConsole("Função que define dentro do setTimeout")
}, 2000);


function writeThisMessageOnConsole(message) {
  console.log(message);
}

//funcao anonima ,dentro de uma variavel nesse caso não é mais anonima
// const resultFunction = function () {
//   writeThisMessageOnConsole("Função que define dentro de uma variavel");
// };


// resultFunction();