// Exercício 1: Você está desenvolvendo uma aplicação que exibe informações de clientes. Cada cliente pode ter uma lista de endereços, e você precisa extrair as cidades de todos os endereços. Use encadeamento opcional, operador de coalescência nula e os métodos map e filter para criar uma lista com as cidades.

 const clientes = [
{ nome: 'Ana', enderecos: [{ cidade: 'São Paulo' }, {cidade: 'Campinas' }] }, 
{ nome: 'Pedro', enderecos: [{ cidade: 'Rio de Janeiro' }] }, 
{ nome:'Maria', enderecos: [] } ];

//Extrair cidades
const cidades = clientes
.filter(cliente => cliente.enderecos?.length > 0) //filtrar clientes que têm endereços
.map(cliente => cliente.enderecos?.map(endereco => endereco.cidade) ?? []) //mapeia cada cliente para a lista de cidades
.reduce((acumulador, cidadesCliente) => acumulador.concat(cidadesCliente), []);//une todos os arrays de cidades em um só



console.log(cidades);

