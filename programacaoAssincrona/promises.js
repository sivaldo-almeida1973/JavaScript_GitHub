const flamengoCampeaoLibertadores2023 = false;

const promessa = new Promise((resolve, reject) => {
  console.log("Pormeto que vou pagar!");
  setTimeout(() => {
    if (flamengoCampeaoLibertadores2023) {
      resolve("Toma aqui seu pagamento! Exatamente como compinamos! Mengão!");
    }else {
      reject("Não acredito que ele perdeu! Infelizmente não vou pagar!");
    }
  }, 2000);
});


console.log(promessa);

promessa.then(response => {
  console.log(response);
  console.log("Pô, nem acredito que você me pagou!")
}).catch(error => console.error(error));


