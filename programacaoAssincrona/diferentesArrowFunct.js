//Arrow function normal
const myLoggingFunction = (message) => {
  console.log(message);
}

myLoggingFunction("Esta é uma arrow function!")


//Arrow Function sem parenteses ,com só 1 parametro=================================
const myLoggingFunctionWithOnlyOneParameter = message => {
  console.log(message);
}

myLoggingFunctionWithOnlyOneParameter('Esta é uma arrow function, que esta sem parenteses')


//Arrow Function com dois parametros, pode ser sem as chaves==========================

const myLoggingFunctionWithOnlyOneInstruction = (message , message2) => console.log(message + message2);

myLoggingFunctionWithOnlyOneInstruction('Teste da função:', 'Bora ver se deu certo!')