// Exercício 3: Você está criando uma função para calcular o total de vendas de uma série de transações. Use parâmetros rest para aceitar uma lista de valores e o método reduce para somar todos os valores.


// 100, 200, 300, 400, 500;

function calcularTotalVendas(...transações) {
  return transações.reduce((acumulador, valor) => acumulador + valor, 0);
}

const totalVendas = calcularTotalVendas( 100, 200, 300, 400, 500, 1000);
console.log(totalVendas);