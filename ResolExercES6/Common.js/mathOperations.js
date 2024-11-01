//função de adição
function add(a,b) {
  return a+b;
}


//função de subtração
function subtract(a,b) {
  return a-b;
}

//exportação das funções -CommonJS
module.exports = {
  add, 
  subtract,
}