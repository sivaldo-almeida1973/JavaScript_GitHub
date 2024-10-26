// Exercício 3: Você precisa adicionar um identificador único (ID) a cada funcionário da empresa. Crie um array com os nomes dos funcionários e utilize o método .map() para adicionar um ID a cada um deles. O ID deve ser baseado na posição do funcionário no array. Como ficará o array resultante?

//Exemplo de Entrada: // ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
//Exemplo de Saída: // [ { id: 1, nome: 'Ana' }, { id: 2, nome: 'Bruno' }, { id: 3, nome: 'Carlos' }, { id:4, nome: 'Diana' }, { id: 5, nome: 'Eduardo' } ]

const funcionarios = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];


const funcionarioComId = funcionarios.map((nome, index ) => ({
  id: index + 1, 
  nome: nome,
}));

console.log(funcionarioComId);


