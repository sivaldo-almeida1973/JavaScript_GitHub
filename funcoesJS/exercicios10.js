// Exercício 10: Crie uma função tradicional chamada calcularDesconto que receba o preço de um produto e a porcentagem de desconto, e retorne o valor do produto com o desconto aplicado. Após criar a função tradicional, transforme-a em uma Arrow Function.


const precoProduto = 200; 
const percentualDesconto = 15;


function calcularDesconto(preco , desconto) {
  return preco - (preco * desconto / 100);
}

const precoFuncaoTradicional = calcularDesconto(precoProduto, percentualDesconto);

console.log(precoFuncaoTradicional);

//Arrow function


const calcularDescontoArrow = (preco, desconto) => preco - (preco * desconto / 100);
const precoArrowFunction = calcularDescontoArrow(precoProduto, percentualDesconto);
console.log(precoArrowFunction)
