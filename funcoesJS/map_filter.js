const faturamentoEmDolar = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000,120_000,130_000,120_000,165_000];


//console.log(faturamento.length);

  //map

const faturamentoEmReais = faturamentoEmDolar.map(
  (valorFaturamentoMensal) => 4.79 * valorFaturamentoMensal);

// console.log(faturamentoEmReais);


//filter 

const faturamentoMaiorQueDesejado = faturamentoEmDolar.filter(
  (valorFaturamentoMensal) => valorFaturamentoMensal >= 130_000
);


console.log(faturamentoMaiorQueDesejado);