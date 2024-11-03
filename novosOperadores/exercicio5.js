// Exercício 5: Você está criando uma função para analisar uma lista de vendas e encontrar a média de vendas para um determinado mês. Use destructuring para extrair os valores e combine filter e reduce para calcular a média.

// const numeros = [1,3,6];
// const [primNum, segNum, tercNum] = numeros;
// console.log(primNum, segNum, tercNum);


// Define um array de objetos representando as vendas
const vendas = [ 
  { vendedor: 'Ana', valor: 1000, mes: 'Agosto' },
  { vendedor: 'Pedro', valor: 1500, mes: 'Agosto' },
  { vendedor: 'Maria', valor: 1200, mes: 'Julho' } 
];

// Função para calcular a média das vendas em um mês específico
const calcularMediaVendas = (vendas, mes) => {
  // Filtra as vendas para incluir apenas as do mês especificado
  const vendasMes = vendas.filter(({ mes: vendasMes }) => vendasMes === mes);
  
  // Soma o valor total das vendas do mês especificado
  const totalVendas = vendasMes.reduce((acumulador, { valor }) => acumulador + valor, 0);
  
  // Calcula a média das vendas, dividindo o valor total pelo número de vendas
  // Se não houver vendas no mês, retorna 0
  return vendasMes.length ? totalVendas / vendasMes.length : 0;
}

// Chama a função para calcular a média das vendas em agosto e imprime o resultado
const media = calcularMediaVendas(vendas, "Agosto");
console.log(media);
