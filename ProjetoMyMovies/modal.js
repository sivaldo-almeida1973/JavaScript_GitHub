const overlay = document.getElementById("modal-overlay");
const background = document.getElementById("modal-background");

//classe que deixa o ocerlay visivel
overlay.classList.add("open");

function backgroundClickHandler() {
  overlay.classList.remove("open");
}
background.addEventListener("click", backgroundClickHandler);






