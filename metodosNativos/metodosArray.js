//adicionar elementos 
//.push no final
// unshift no inicio

let produtos = ["carrinho","bola","bicicleta"];

//adicionar navio no final
produtos.push("navio");
console.log(produtos);

//adicionar valore no final
produtos.push(10, 20, 30);
console.log(produtos);

produtos.unshift("carro");
console.log(produtos);

//remover ultimo(pop)
produtos.pop();
console.log(produtos);

//remover primeiro (.shift)
produtos.shift();
console.log(produtos);
