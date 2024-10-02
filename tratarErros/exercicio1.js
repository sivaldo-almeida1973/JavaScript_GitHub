// Exercício 1: Tratamento de Erro em Variável Não Definida Crie :
//um código JavaScript que inclua uma função chamada tratarErroVariavelNaoDefinida(). Dentro dessa função, siga estas etapas:

// Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar acessar a variável variavelNaoDefinida
// (que não foi definida). No bloco catch, exiba uma mensagem de erro personalizada usando console.error().
// Esta mensagem deve informar que ocorreu um erro ao tentar acessar uma variável não definida e incluir o
// erro capturado na mensagem de erro.

// const variavelNaoDefinida = "esta variavel existe"

function tratarErroVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);


  }catch (erro) {
    console.error("Erro: A variavel nao está definida", erro)
  }
}


tratarErroVariavelNaoDefinida();