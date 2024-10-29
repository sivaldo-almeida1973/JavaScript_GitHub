// Aqui, objectA é um objeto com três propriedades: id, name e lastname.

const objectA = {
  id:0,
  name:'lucas',
  lastname:'Almeida',
};

//listA é um array contendo vários números.
const listA = [10,2,3,456,23,1,2,34];

//O operador de espalhamento (...) é usado para criar uma cópia superficial de listA em listB. Isso significa que listB é um novo array com os mesmos elementos de listA, mas alterações em listB não afetam listA.
const listB = [...listA];


//O operador de espalhamento (...) é usado novamente para copiar todas as propriedades de objectA para objectB, adicionando uma nova propriedade saldoBancario com o valor 1_000_000_000_000
const objectB = {...objectA, saldoBancario: 1_000_000_000_000};

//Aqui, o terceiro elemento de listB (índice 2) é alterado para 652.
listB[2] = 652;


console.log(listA[2]);
console.log(listB[2]);

console.log('ObjectA:',objectA)
console.log('ObejectB:',objectB)

//listA[2] imprime 3, mostrando que listA não foi alterada.
// listB[2] imprime 652, mostrando a alteração feita em listB.
// objectA é impresso sem a propriedade saldoBancario.
// objectB é impresso com todas as propriedades de objectA mais a nova propriedade saldoBancario.




//Em resumo, o código demonstra como copiar arrays e objetos usando o operador de espalhamento (...), garantindo que alterações nas cópias não afetem os originais