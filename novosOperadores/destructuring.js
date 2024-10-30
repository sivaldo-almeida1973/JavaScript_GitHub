const person = {
  name: 'Sivaldo',
  lastName: 'Vieira',
  age: 35,
  netWorth: 1_000_000_000,
  // car: {
  //   brand: 'Volkswagen',
  //   model: 'gol',
  //   year: 2002,
  // }
};
//desestruturacao
// const {name, lastName, age} = person
// const {brand, model, year} = person.car

// const fullname = `${name} ${lastName}`;

// console.log(fullname);

// const presentationString = `Esse é o ${name} ${lastName} de ${age} anos de idade, motorista do carro ${brand} ${model} ${year}`


// console.log(presentationString);


//com funcao
function printUserInfo({name, lastName, age, netWorth}) {
  const presentationString = `Esse é o ${name} ${lastName} de ${age} anos de idade, dono de um patrimonio de  ${netWorth} reais`
  console.log(presentationString);

}


printUserInfo(person);

