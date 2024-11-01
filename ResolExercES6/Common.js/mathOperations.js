//função de adição
function add(a,b) {
  return a+b;
};


//função de subtração
function subtract(a,b) {
  return a-b;
}

//exportação das funções -CommonJS
module.exports = {
  add, 
  subtract,
};




//Desafio Extra - Exportar condicionalmente
if (process.env.NODE_ENV === 'development') {
    function multiply(a, b) {
    return a*b;
  }
  //se for true, faz a exportação
  module.exports.multiply = multiply;
}