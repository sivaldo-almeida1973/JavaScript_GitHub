// Exercício 6: Você tem uma lista de imóveis em diferentes bairros da cidade. Utilize o método .filter() para criar uma nova lista contendo apenas os imóveis localizados no bairro "Centro". Qual será o array resultante?
//Exemplo de Saída: // [
//  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro:'Centro' }, 
//  { id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, 
//  { id: 5, tipo:'Casa', valor: 700000, disponivel: true, bairro: 'Centro' } ]

const imoveis = [ 
  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro: 'Centro' }, 
  {id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, 
  { id: 3, tipo: 'Cobertura',valor: 900000, disponivel: true, bairro: 'Centro' }, 
  { id: 4, tipo: 'Apartamento', valor: 300000,disponivel: false, bairro: 'Zona Sul' }, 
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro:'Centro' } 

]


const imoveisBairroCentro = imoveis.filter( imovel => imovel.bairro === 'Centro');


console.log(imoveisBairroCentro);