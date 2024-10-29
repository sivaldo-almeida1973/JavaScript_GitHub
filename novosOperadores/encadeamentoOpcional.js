const person = {
  name: 'Sivaldo',
  surname: 'Vieira',
  age: 35,
  postalCode: '12345-230',
  // mother: {
  //   // name: 'Maria',
  //   // surname: 'Vieira',
  //   // age: 75,
  //   // postalCode: '12345-230',
    
  // },
};

console.log(person?.mother?.name)


//truthy - avloers com cara de de Verdadeiro
//falsy = valores com cara de Falso - 0, null, undefined e ""


//{} , [] não são falsy
// if(person && person.mother && person.mother.name) {
//  console.log(person.mother.name)

// }






