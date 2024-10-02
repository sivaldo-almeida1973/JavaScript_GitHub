console.log(1);

//funcao assincrona
setTimeout(write2OnConsole, 2000);
console.log(3);

function write2OnConsole() {
  console.log(2);
}
