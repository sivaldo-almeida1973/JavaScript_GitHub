function comportamentoA() {
  console.log('estou executando o comportamento A');
  comportamentoB();
  console.log('Finalizei a execução c comportamento A');
}


function comportamentoB() {
  console.log('estou executando o comportamento B');
  comportamentoC();
  console.log('Finalizei a execução c comportamento B');
}

function comportamentoC() {
  console.log('estou executando o comportamento C');
  console.log('Finalizei a execução c comportamento C');
}

comportamentoA();