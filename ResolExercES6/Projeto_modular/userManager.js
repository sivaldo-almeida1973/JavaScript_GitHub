//criar função addUser

export function addUser(user) {
  //chama o elemento div pelo id ,adiciona conteúdo ao texto
  document.getElementById('message').textContent = `Usuário ${user} adicionado!`;
}


