//Importar as funções
import { addUser ,deleteUser, updateUser} from "./userManager.js";

//utiliza-la dentro do botão Adicionar Usuário pelo(id=addUserBtn)
document.getElementById('addUserBtn').addEventListener('click', () => {
  //(armazenar nome do user em uma variavel) pelo id do input(userName)
  const userName = document.getElementById("userName").value;
  //utilizar value na função (adicionar usuário)
  addUser(userName);
});

document.getElementById("deleteUserBtn").addEventListener("click", () =>{
  const userName = document.getElementById("userName").value; 
  deleteUser(userName);
})


document.getElementById("updateUserBtn").addEventListener("click", () =>{
  const userName = document.getElementById("userName").value;
  const newUserInfo = document.getElementById("newUserInfo").value;
  updateUser(userName, newUserInfo);
})