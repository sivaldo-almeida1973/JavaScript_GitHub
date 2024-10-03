
function procedimento1(outraFuncao) {
  //
  outraFuncao();
}


function procedimento2() {
  console.log('a funcao procedimento 2 foi executada com sucesso');
  return 'banana';
}

//procedimento1(procedimento2());  === undefined

//forma certa  , funcao recebe outra como parametro se () pelo nome
procedimento1(procedimento2);



//funcao recebe uma funcao anonima
procedimento1(() => {
  console.log('a funcao procedimento 2 foi executada com sucesso');
  return 'banana';
})