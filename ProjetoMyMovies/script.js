const $searchButton = document.getElementById("search-button");
const background = document.getElementById("modal-background");


function $searchButtonClickHandler() {
  overlay.classList.add('open');
}

$searchButton.addEventListener("click", $searchButtonClickHandler);
