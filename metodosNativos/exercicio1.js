//converter para maiusculas
let string = "javascript é divertido";
let result = string.replace("javascript", "javascript".toUpperCase());
console.log(result)



//extrair palavra da frase e coverter em minusculas
let str = "Aprendendo javaScript";
let palavra = str.substring(0, 10).toLowerCase();

console.log(palavra);

//substituir palavra python

let frase = "Aprendendo Python";
let extrairPalavra = frase.slice(11);
console.log(extrairPalavra);
let trocar = frase.replace(extrairPalavra, "JavaScript")
console.log(trocar);

//Dividir string em array
let lista = "cadeira, mesa, sofa, armario";

let array = lista.split(", ")
console.log(array);

//remover sofa da lista
array.splice(array.indexOf("sofa"), 1)
console.log(array);
