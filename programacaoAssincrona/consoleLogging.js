console.log(1);

//funcao assincrona
const result = setTimeout(write2OnConsoleAndReturnString, 2000);
console.log(result);


function write2OnConsoleAndReturnString() {
  console.log(2);
  return 'Procedure Completed'
}
