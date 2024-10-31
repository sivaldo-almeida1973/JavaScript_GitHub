// Exercício 8: Conexão com Banco de Dados com Try, Catch e Finally
// exercicios_gabarito.md 2023-10-10
// 5 / 6
// Crie um código JavaScript que inclua uma função chamada conectarBancoDeDados(). Dentro dessa função,
// siga estas etapas:
// Tente estabelecer uma conexão com um banco de dados fictício utilizando uma operação de conexão fictícia.
// Utilize um bloco try...catch para lidar com qualquer erro que ocorra durante a tentativa de conexão com o
// banco de dados. No bloco try, se a conexão com o banco de dados for bem-sucedida, exiba uma mensagem
// informando que a conexão foi estabelecida. No bloco catch, exiba uma mensagem de erro personalizada
// informando que ocorreu um erro durante a conexão com o banco de dados. Utilize um bloco finally para
// garantir que a conexão com o banco de dados seja fechada, se necessário, independentemente de ocorrer um
// erro ou não.

// function conectarBancoDeDados() {
//   try{
//     const objeto = null;
//     // console.log("Conexão bem sucedida");
//     console.log(objeto.propriedade);

//   }catch(erro) {
//     console.error("Erro ao acessar o banco de dados");
//   }finally {
//     console.log("Bloco finally: Conexão encerrada!");
//   }

// }

// conectarBancoDeDados()


//Como se tivesse um banco de dados

let banco = {
  registros1: {id:1, nome:"item 1"},
  registros2: {id:2, nome:"item 2"},
  registros3: {id:3, nome:"item 3"},
};

function acessarbancoDadosFake() {
  try{
    const resultado = banco.registros4;
    if(!resultado) {
      throw new Error("Erro: Registro não encontrado");
    }
    console.log("Registro encontrado", resultado);
  }catch(erro) {
    console.error(erro.message);
  }finally{
    console.log("Conexão encerrada!")
  }

}

acessarbancoDadosFake();