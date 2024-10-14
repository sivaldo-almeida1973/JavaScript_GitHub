const writeOnConsole2 = function() {
  console.log('This is the message #2');
}


const writeOnConsole3 = () => {
  console.log('This is the message #3');
}

writeOnConsole();
writeOnConsole2();
writeOnConsole3();

//o içamento(hoisting) so funciona com a funcao padrão
//içar significa ler a funcao antes 
function writeOnConsole() {
  console.log('This is the message #1');
}



// Hoisting em JavaScript: Uma Explicação Completa
// Hoisting é um mecanismo do JavaScript que "iça" ou "eleva" as declarações de variáveis e funções para o topo do seu escopo (seja ele global ou de uma função). Isso significa que você pode usar uma variável ou função antes de ela ser declarada no seu código.

// Como funciona:

// Fase de compilação: Antes de executar o seu código, o JavaScript realiza uma fase de compilação. Durante essa fase, todas as declarações de variáveis e funções são movidas para o topo do seu escopo.
// Inicialização: As variáveis são inicializadas com o valor undefined após serem "içadas". As funções são inteiramente "içadas", ou seja, você pode chamá-las antes da sua definição.
