const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000,120_000,130_000,120_000,165_000];


//console.log(faturamento.length);

  //map

const faturamentoEmReais = faturamento.map(
  (valorFaturamentoMensal) => 4.79 * valorFaturamentoMensal);

// console.log(faturamentoEmReais);


//filter 

const faturamentoMaiorQueDesejado = faturamento.filter(
  (valorFaturamentoMensal) => valorFaturamentoMensal >= 130_000
);


//console.log(faturamentoMaiorQueDesejado);



// let faturamentoAnual = 0;
// for (let i = 0; i < faturamento.length; i++) {
//   faturamentoAnual += faturamento[i];
// }

// console.log(`O faturamento aunal foi de: ${faturamentoAnual}`);
// console.log(`O faturamento medio do ultimo ano foi de: ${faturamentoAnual/faturamento.length}`);



//reduce              parametros          funcao de callback
const faturamentoAnual = faturamento.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);


console.log(`O faturamento aunal foi de: ${faturamentoAnual}`);
console.log(`O faturamento medio do ultimo ano foi de: ${faturamentoAnual/faturamento.length}`);













