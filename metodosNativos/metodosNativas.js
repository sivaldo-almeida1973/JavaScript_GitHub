//String - sequencia de caracteres
let string = "Olá, mundo!";

minusculas = string.toLowerCase();//letrs minusculas
maiusculas = string.toUpperCase();

console.log(minusculas)
console.log(maiusculas)

//slice(start, end)
console.log(string[0]);


console.log(string.slice(0, 5));

console.log(string.slice(-6));// de tras /frente

//substring(start end)
console.log(string.substring(0, 5))
// console.log(string.substring(-6))


//replace(search, replaceWidth)

console.log(string.replace("mundo", "javaScript"));//nao substitui o valor original

//indexOf
console.log(string.indexOf("mundo"))
console.log(string.indexOf("m"))
console.log(string.indexOf("o"))


//split (delimiter[, limit]); trasnforma em lista

let texto = "maçã, banana, laranja, uvas"
console.log(texto);
// let frutas = texto.split(",");
let frutas = texto.split(",", 3);//max 3 elementos
console.log(frutas)