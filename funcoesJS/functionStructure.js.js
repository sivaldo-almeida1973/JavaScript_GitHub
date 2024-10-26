// function writeMessageOnConsoleAndReturnTwo(message) {
//   console.log(message);
//   return 2;
// }

//palavra-chave function =X
//nome da funcao X
//parênteses = parâmentros => V necessario
//bloco  de chaves com instruções dentro => V necessario
//instrução de retorno  V


//palavra function pode não existir , na funcao anonima, para issso usar varivel para a funcao
const variableThatStoreFunction = function(message) {
  console.log(message);
  return undefined
}

//o retorna da funcao por padrão sempre será undefined
// const variableThatStoreFunctio2 = function(message) {
//   console.log(message);

// }


// console.log(`O retorno da fução na primeira variável é ${variableThatStoreFunctio('função da primeira variável!')}`);

// console.log(`O retorno da fução na segunda variável é ${variableThatStoreFunctio('função da segunda variável!')}`);


// arrow function com um parametro não precisa ter ()
// com 2 parametros ou sem parametros obrigado ter ()
//funcao anonima(arrow function)
const writeMessageOnConsoleAndReturnTwo = (message) => {
  console.log(message);
  return 2;
}


//funcao padrao

function squareNamber(originaNamber) {
  return originaNamber * originaNamber;
}

//mesma funcao  de cima , mas como ( arrow function)
const squareNamberArrow1 = originaNamber => {
  return originaNamber * originaNamber;
}

//(arrow function) pode ser escrita assim , quando tiver apenas uma instrucao
const squareNamberArrow = originaNamber => originaNamber * originaNamber;


console.log(`2 ao quadrado vale ${squareNamber(2)}`);
console.log(`3 ao quadrado vale ${squareNamberArrow1(3)}`);
console.log(`2 ao quadrado vale ${squareNamberArrow(2)}`);



const arrowFunctionQueRetornaObjeto = () => {
  return {
    id: 0,
    nome: 'Sivaldo vieira',
  }
}


console.log(arrowFunctionQueRetornaObjeto());