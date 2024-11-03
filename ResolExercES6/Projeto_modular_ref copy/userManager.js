//Refatoração-------------------
const message = document.getElementById("message");

//criar função addUser
function addUser(user) {
  //chamar a variavel
  message.textContent = `Usuário ${user} adicionado!`;
}

//criar função de deletar
function deleteUser(user) {
 message.textContent = `Usuário ${user} deletado com sucesso!`
}

//Função atualizar
function updateUser(user, newInfo) {
 message.textContent = `Usuário: ${user} nova informação: ${newInfo}!`;

}

//"Exportar tudo em um único obj, ao invés de individualmente nomeado."
export {addUser, deleteUser, updateUser};


//outra forma seria
// const managerUser = {addUser, deleteUser, updateUser};
// export default managerUser;