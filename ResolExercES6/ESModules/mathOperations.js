//função de adição
function add(a,b) {
  return a+b;
};


//função de subtração
function subtract(a,b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}


//---------------exportação 3 tipos--------------

// export { add, subtract, multiply};

// export default{ add, subtract, multiply};

const math = {add, subtract, multiply};
export default math;