//Importar as funções
import managerUser from "./userManager.js";

//utiliza-la dentro do botão Adicionar Usuário pelo(id=addUserBtn)
document.getElementById('addUserBtn').addEventListener('click', () => {
  const userName = document.getElementById("userName").value;
  managerUser.addUser(userName);
});

document.getElementById("deleteUserBtn").addEventListener("click", () =>{
  const userName = document.getElementById("userName").value; 
  managerUser.deleteUser(userName);
})


document.getElementById("updateUserBtn").addEventListener("click", () =>{
  const userName = document.getElementById("userName").value;
  const newUserInfo = document.getElementById("newUserInfo").value;
  managerUser.updateUser(userName, newUserInfo);
})