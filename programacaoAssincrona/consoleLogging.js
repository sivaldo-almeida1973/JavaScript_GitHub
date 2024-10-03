// console.log(1);

// //funcao assincrona
// const result =
//  setTimeout(() => write2OnConsoleAndReturnString(console.log), 2000);



// function write2OnConsoleAndReturnString(callbackFunction) {
//   console.log(2);
//   callbackFunction('Procedure Completed');
  
// }


//  passando um funcao anonima como parametro

console.log(1);

//funcao assincrona
const result =
 setTimeout(() => write2OnConsoleAndReturnString((message) => {
  console.log(message);
  console.log(message + "mensagem escrita no console por uma segunda vez!")
 }), 2000);



function write2OnConsoleAndReturnString(callbackFunction) {
  console.log(2);
  callbackFunction('Procedure Completed');
  
}
