// Exercício 7: Manipulação de Arquivo com Try, Catch e Finally
// Crie um código JavaScript que inclua uma função chamada lerArquivo(). Dentro dessa função, siga estas etapas:

// Tente ler um arquivo chamado "arquivo.txt" utilizando uma operação fictícia de leitura de arquivo. Utilize um
// bloco try...catch para lidar com qualquer erro que ocorra durante a tentativa de leitura do arquivo. No bloco
// try, se a leitura do arquivo for bem-sucedida, exiba o conteúdo do arquivo no console. No bloco catch, exiba
// uma mensagem de erro personalizada informando que ocorreu um erro durante a leitura do arquivo. Utilize
// um bloco finally para garantir que determinadas operações (por exemplo, fechar o arquivo, se necessário)
// sejam executadas, independentemente de ocorrer um erro ou não.

// function lerArquivo() {
//   try {
//     const conteudoArquivo = "Este é o conteúdo do arquivo fictício!";
//     console.log("Conteudo do arquivo: ",conteudoArquivo);


//   }catch(erro) {
//     console.error("O ocorreu um erro ao ler o arquivo!", erro)
//   } finally {
//     console.log("Bolco finally sendo executado, encerrar a operacao da função!")
//   }

// }

// lerArquivo();

//ler arquivo - Modulo FS

const fs = require("fs");

function lerArquivoComFS() {
  try{
    
    const conteudoArquivo = fs.readFileSync("arquivo.txt", "utf-8");
    console.log(conteudoArquivo);

  }catch (erro) {
    console.error("Erro ao le o arquivo", erro);
  }finally {
    console.log("Arquivo lido com sucesso!")
  }
}

lerArquivoComFS();