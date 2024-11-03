// Exercício 11: Crie uma função tradicional chamada filtrarPorCategoria que receba uma lista de produtos e uma categoria, e retorne os produtos que pertencem àquela tegoria. Após criar a função tradicional, transforme-a em uma Arrow Function.


const produtos = [
   { nome: 'Camisa', categoria: 'Vestuário' }, 
   { nome:'Notebook', categoria: 'Eletrônicos' },  
   { nome: 'Tênis', categoria: 'Calçados' }, 
   { nome: 'Calça',categoria: 'Vestuário' } 
]; 


const categoriaDesejada = 'Vestuário';


function  filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(function(produto) {
    return produto.categoria === categoria;

  });
}

const produtosFiltroTradicional = filtrarPorCategoria(produtos, categoriaDesejada);
console.log(produtosFiltroTradicional);


//Arrow function-------------------------------------------
const categoriaDesejada2 = 'Calçados';

const filtrarPorCategoriaArrow = (produtos, categoria) => produtos.filter((produto) => produto.categoria === categoria);

console.log(filtrarPorCategoriaArrow(produtos, categoriaDesejada2));

