//A função gradesSum aceita três parâmetros principais: name, lastName e grades. O operador de espalhamento (...) é usado para capturar um número variável de notas (grades) em um array.

function gradesSum(name, lastName, ...grades) {
  return `O aluno ${name} ${lastName} acumulou ${grades.reduce((acumulador, currentValue) => acumulador + currentValue, 0)} pontos em todas as suas avaliações!`;
}

console.log(gradesSum('Sivaldo', "vieira", 7,8,7,10));





// O método reduce é utilizado para somar todas as notas no array grades. Ele itera sobre cada elemento do array, acumulando o resultado em acumulador, começando com o valor inicial 0.A função retorna uma string que inclui o nome do aluno, o sobrenome e a soma total das notas.
//A função calcula a soma das notas (7 + 8 + 7 + 10 = 32) e retorna a string: O aluno Sivaldo vieira acumulou 32 pontos em todas as suas avaliações!.