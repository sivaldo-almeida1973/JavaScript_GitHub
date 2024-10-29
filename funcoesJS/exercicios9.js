// Exercício 9: Você tem um array de objetos representando produtos vendidos, onde cada objeto contém o nome do produto e sua categoria. Utilize o método .reduce() para criar um objeto que conte quantos produtos foram vendidos em cada categoria. Como ficará o objeto resultante?

//Exemplo de Saída: // { 'Vestuário': 3, 'Eletrônicos': 2, 'Calçados': 1 }

//Definição do Array produtosVendidos
//Aqui, você tem um array de objetos, onde cada objeto representa um produto com um nome e uma categoria.
const produtosVendidos = [ 
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Calça', categoria: 'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Celular', categoria:  'Eletrônicos' }, 
  { nome: 'Tênis', categoria: 'Calçados' }, 
  { nome: 'Meias', categoria: 'Vestuário' } ];

//reduce: Este método é usado para transformar o array produtosVendidos em um único objeto que contém a contagem de produtos por categoria.
//contagem: Este é o acumulador que começa como um objeto vazio {}.
//produto: Cada item do array produtosVendidos é processado um por um.
 const produtVendidosCategorias = produtosVendidos.reduce((contagem, produto) => {
  contagem[produto.categoria] = (contagem[produto.categoria] || 0) +1;
  return contagem;

 }, {}) ;

 console.log(produtVendidosCategorias);





//  contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1: Para cada produto, verifica se a categoria já existe no objeto contagem. Se existir, incrementa o valor; se não, inicializa com 0 e depois incrementa.