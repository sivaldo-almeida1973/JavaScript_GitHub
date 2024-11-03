// Exercício 2: Uma loja decidiu reajustar os preços de todos os produtos em 5% para cobrir os custos operacionais. Crie um array com os preços dos produtos e utilize o método .map() para calcular os novos preços. Quais serão os novos preços?

//Exemplo de Entrada: // [50, 100, 150, 200, 250];
//Exemplo de Saída: //// [52.5, 105, 157.5, 210, 262.5]


const precosProdutos = [50, 100, 150, 200, 250];

//nesse caso não precisou usar metodos  ,por ser ponto (1.05) fltuante de duas casa o javaScript enetendeu
const novosPrecosProdutos1 = precosProdutos.map((preco) => (preco * 1.05));


const novosPrecosProdutos = precosProdutos.map((preco) => Math.round(preco * 1.05));


console.log(novosPrecosProdutos);
