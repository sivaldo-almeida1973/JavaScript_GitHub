//criar função addUser

export function addUser(user) {
  //chama o elemento div pelo id ,adiciona conteúdo ao texto
  document.getElementById('message').textContent = `Usuário ${user} adicionado!`;
}


//criar função de deletar
export function deleteUser(user) {
  document.getElementById("message").textContent = `Usuário ${user} deletado com sucesso!`
}

//Função de atualizar
export function updateUser(user, newInfo) {
  document.getElementById("message").textContent = `Usuário: ${user} nova informação: ${newInfo}!`;

}