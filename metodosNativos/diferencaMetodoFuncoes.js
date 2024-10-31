function saudacao(nome) {
  return `Ola, ${nome}`;
}
//chamada com parametro
console.log(saudacao("Ana"));



const pessoa = {
  nome:"ana",
  saudacao: function() {
    return `Olá , ${pessoa.nome}`;
  }
}

//chamada
console.log(pessoa.saudacao());
