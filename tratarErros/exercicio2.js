// Exercício 2: Exercício: Tratamento de Erro em Chamada de Função Inexistente Crie um código JavaScript que inclua uma função chamada tratarErroFuncaoInexistente(). Dentro dessa função, siga estas etapas:

// Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar chamar uma função funcaoInexistente()
// que não está definida. Dentro do bloco try, tente chamar a função funcaoInexistente(). No bloco catch, exiba
// uma mensagem de erro personalizada usando console.error(). Esta mensagem deve informar que ocorreu um
// erro ao tentar chamar uma função que não está definida e incluir o erro capturado na mensagem


function  tratarErroFuncaoInexistente() {
  try {
    funcaoInexistente();
  }catch(erro) {
    console.error("Erro: A funcao chamada nao existe", erro);
  }

}

// function funcaoInexistente() {
//   console.log("A funcao agora existe!")
// }

tratarErroFuncaoInexistente();