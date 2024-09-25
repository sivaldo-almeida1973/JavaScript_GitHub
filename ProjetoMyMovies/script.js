const $searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name")
const movieYear = document.getElementById("movie-year")

//funcao que vai gerenciar o click no tutton de busca
function $searchButtonClickHandler() {
  overlay.classList.add('open');
  console.log(movieName.value.split(' ').join('+'));
  console.log('Ano: ', movieYear.value);
}

//chama a funcao com o click no button
$searchButton.addEventListener("click", $searchButtonClickHandler);
