//Array(tipo referencia)
const list = [1,2,3,4,5,6,7,8];


//adicionar no final do array
list.push(9);

console.log(list);

//deleta ultimo elemento
const eliminatedValue = list.pop();

console.log(list);
console.log('Deletado:',eliminatedValue);


const list2 = [9,10,11,12,13];

//jntar as duas listas
console.log(list.concat(list2));

//list original não altera
console.log(list)
console.log(list2)
