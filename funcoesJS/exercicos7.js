// Exercício 7: Você tem um array de objetos representando as vendas de uma empresa, onde cada objeto contém o valor da venda. Utilize o método .reduce() para calcular o faturamento total da empresa. Qual será o valor total?
 const vendas = [ 
{ id: 1, valor: 1500 }, 
{ id: 2, valor: 2300 }, 
{ id: 3, valor: 3200 }, 
{ id: 4, valor: 4100 },
 { id: 5, valor: 1800 } 
];


//const resultado = arrayOriginal.reduce(callbacl(acumulador, elemento, indice ,array), valorInicial);

//como se fosse um for--------------------------

const faturamentoTotal =  vendas.reduce((total, venda, ) =>total + venda.valor, 0)


console.log(faturamentoTotal);