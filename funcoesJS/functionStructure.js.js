function writeMessageOnConsoleAndReturnTwo(message) {
  console.log(message);
  return 2;
}

//palavra-chave function =>
//nome da funcao X
//parênteses = parâmentros =>
//bloco  de chaves com instruções dentro =>
//instrução de retorno  V


//palvra function pode não existir , na funcao anonima, para issso usar varivel para a funcao
const variableThatStoreFunctio = function(message) {
  console.log(message);
  return undefined
}

//o retorna da funcao por padrão sempre será undefined
const variableThatStoreFunctio2 = function(message) {
  console.log(message);

}


console.log(`O retorno da fução na primeira variável é ${variableThatStoreFunctio('função da primeira variável!')}`);

console.log(`O retorno da fução na segunda variável é ${variableThatStoreFunctio('função da segunda variável!')}`);