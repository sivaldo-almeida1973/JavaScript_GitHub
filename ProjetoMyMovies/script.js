const $searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");

//funcao que vai gerenciar o click no tutton de busca
function $searchButtonClickHandler() {
  overlay.classList.add('open');
}

//chama a funcao com o click no button
$searchButton.addEventListener("click", $searchButtonClickHandler);
