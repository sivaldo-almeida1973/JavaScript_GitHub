// Exercício 2: Leitura de Arquivo com Callback
// Escreva uma função lerArquivo que aceita um nome de arquivo e uma função de retorno de chamada (callback). A função deve ler o conteúdo do arquivo e passá-lo para a função de retorno de chamada. Por fim, chame a função lerArquivo() usando um callback que faça o conteúdo do arquivo ser exibido no console.
// Dica: disponibilizamos um arquivo de texto para esse exercício. Coloque-o na mesma pasta do seu código JavaScript pra facilitar a resolução.



//importa modula file system
const fs = require("fs");


function lerArquivo(arquivo, callback) {
  fs.readFile(arquivo, 'utf-8', (err, data) => {
    if(err) {
      console.log('Erro ao tentar acessar o arquivo', err.message);
      return;
    }
    //se nao tiver erro
    callback(data);
  });
}


lerArquivo('textoExercicio2.txt', (conteudo) => {
  console.log(conteudo);
});