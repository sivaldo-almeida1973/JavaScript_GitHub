// Exercício 5: Você tem uma lista de imóveis com seus respectivos valores. Utilize o método.filter() para criar uma nova lista contendo apenas os imóveis que têm valor acima de R$ 500.000. Qual será o array resultante?

//Exemplo de Saída: 
// [ { id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, 
//{ id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, 
//{ id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro: 'Centro' } ]



const imoveis = [ 
  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro: 'Centro' }, 
  {id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, 
  { id: 3, tipo: 'Cobertura',valor: 900000, disponivel: true, bairro: 'Centro' }, 
  { id: 4, tipo: 'Apartamento', valor: 300000,disponivel: false, bairro: 'Zona Sul' }, 
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro:'Centro' } 

]

const ImoveisDeAutoValor = imoveis.filter((imovel => imovel.valor > 500000));

console.log(ImoveisDeAutoValor);