// Exercício 12: Crie uma função tradicional chamada calcularFaturamentoTotal que receba uma lista de vendas e retorne o faturamento total somando o valor de todas as vendas. Após criar a função tradicional, transforme-a em uma Arrow Function.


const vendas = [ 
  { id: 1, valor: 1500 }, 
  { id: 2, valor: 2300 }, 
  { id: 3, valor:3200 } 
];


function calcularFaturamentoTotal (vendas) {
  const vendasTotal =  vendas.reduce(function(total, venda) {
    return total + venda.valor;
  }, 0);
  return vendasTotal
}

const faturamentoTotalTradicional = calcularFaturamentoTotal(vendas);
console.log(faturamentoTotalTradicional);



//Arrow function, 
const calculaFaturamentoTotalArrow = vendas => vendas.reduce((total , venda) => total + venda.valor, 0);
const arrowResultado =  calculaFaturamentoTotalArrow(vendas);
console.log(arrowResultado);