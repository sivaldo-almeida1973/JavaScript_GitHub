// Exercício 8: Você tem um array de objetos representando avaliações de clientes, onde cada
// objeto contém uma pontuação de satisfação (de 1 a 5). Utilize o método .reduce() para calcular a média de satisfação dos clientes. Qual será a média?

const avaliacoes =  [ 
{ cliente: 'João', pontuacao: 4 },
{ cliente: 'Maria', pontuacao: 5 }, 
{  cliente: 'Pedro', pontuacao: 3 }, 
{ cliente: 'Ana', pontuacao: 4 }, 
{ cliente: 'Lucas', pontuacao: 5} ];

// reduce percorre cada elemento do array avaliacoes.  
//total é o acumulador que guarda a soma das pontuações até o momento.
// avaliacao é o elemento atual do array que está sendo processado.
const totalPontosAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.pontuacao, 0);

                                                     
const mediaAvaliacoes = totalPontosAvaliacoes / avaliacoes.length;


console.log('Total pontos:',totalPontosAvaliacoes);
console.log('Media:',mediaAvaliacoes);




// Declaração do Array avaliacoes:
// Você cria um array chamado avaliacoes que contém objetos. Cada objeto representa uma avaliação de um cliente, com o nome do cliente (cliente) e a pontuação dada (pontuacao).
// Uso do reduce:
// A função reduce é usada para calcular o total das pontuações.
// reduce percorre cada elemento do array avaliacoes.
// total é o acumulador que guarda a soma das pontuações até o momento.
// avaliacao é o elemento atual do array que está sendo processado.
// A função (total, avaliacao) => total + avaliacao.pontuacao adiciona a pontuação do cliente atual (avaliacao.pontuacao) ao acumulador (total).
// O segundo argumento 0 é o valor inicial do acumulador.
// Resultado
// totalPontosAvaliacoes será a soma de todas as pontuações dos clientes, que neste caso é (4 + 5 + 3 + 4 + 5 = 21).