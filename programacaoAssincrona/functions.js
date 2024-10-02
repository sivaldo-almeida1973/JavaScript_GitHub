//Funcao anonima (funcao sem nome) que executa outra funcao

setTimeout(function () {
  writeThisMessageOnConsole("Função que define dentro do setTimeout")
}, 2000);


function writeThisMessageOnConsole(message) {
  console.log(message);
}