//Importar as funções
import { addUser } from "./userManager.js";

//utiliza-la dentro do botão Adicionar Usuário pelo(id=addUserBtn)
document.getElementById('addUserBtn').addEventListener('click', () => {
  //(armazenar nome do user em uma variavel) pelo id do input(userName)
  const userName = document.getElementById("userName").value;
  //utilizar value na função (adicionar usuário)
  addUser(userName);
})