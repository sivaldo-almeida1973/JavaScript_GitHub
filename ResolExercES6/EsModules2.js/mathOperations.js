//função de adição
function add(a,b) {
  return a+b;
};


//função de subtração
function subtract(a,b) {
  return a-b;
}



//---------------exportação 3 tipos--------------

// export { add, subtract, multiply};

// export default{ add, subtract, multiply};

const math = {add, subtract};
export default math;

//EXPORT EM LINHA
export function multiply(a, b) {
  //verificação de condição
  if(process.env.NODE_ENV === "development") {
    console.log('Estamos no ambiente de desenvolvimento!')
    return a*b;
  }else {
    let error = "Estamos em outro ambiente!";
    return error;
  }
}
