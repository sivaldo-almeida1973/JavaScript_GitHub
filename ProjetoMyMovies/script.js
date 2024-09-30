const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListContainer = document.getElementById('movie-list');

//criar lista(funcao addToList no final)
// let movieList = [];
let movieList = JSON.parse(localStorage.getItem('movieList')) ?? [];



//funcao que vai gerenciar o click no tutton de busca
async function searchButtonClickHandler() {
  try {
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}&y=${ movieYearParameterGenarator()}`;
  
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    if(data.Error) {
      throw new Error('Filme não encontrado!')
    }
    //chamada da funcao createModal do modal.js
    createModal(data)
    //chamada da funcao abrir o modal
    overlay.classList.add('open');
  }catch (error) {
    notie.alert({type: "error", text: error.message});
  }
}

//tratamento de erros(nome do filme)
function movieNameParameterGenerator() {
  if(movieName.value === '') {
    throw new Error('O nome do filme deve ser informado');
  }
  return movieName.value.split(' ').join('+');
}

//tratamento de erros(ano do filme)
function movieYearParameterGenarator() {
  if (movieYear.value === '') {
    return '';
  }
  if (movieYear.value.lenght !== 4 || Number.isNaN(Number(movieYear.value))) {
    throw new Error('Ano do filme inválido.');
  }
  return `&y=${movieYear.value}`;
}

//funcao que adiciona um filme no final da lista
function addToList(movieObject) {
  movieList.push(movieObject);
}

//funcao que identifica se o filme ja esta na lista
function isMovieAlreadyOnList(id) {
  //funcao que  compara se id informado é igual a algum que ja esta na lista
  function doesThisIdBelongToThisMovie(movieObject) {
    return movieObject.imdbID === id;

  }
  //
  return Boolean(movieList.find(doesThisIdBelongToThisMovie))

}

//atualizar a interface(depois de adicionar o filme)
function updateUI(movieObject) {
  movieListContainer.innerHTML += `<article id="movie-card-${movieObject.imdbID}">
      <img 
      src="${movieObject.Poster}"
      alt="Poster de ${movieObject.Title}."
      />
      <button class="remove-button" onclick="{removeFilmFromList('${movieObject.imdbID}')}">
        <i class="bi bi-trash"></i> Remover
        </button>
  </article>`;
}

//remover filme da lista
function removeFilmFromList(id) {
//pega filme e verifica se o id é diferente 
  movieList = movieList.filter(movie => movie.imdbID != id);
  document.getElementById(`movie-card-${id}`).remove();
  updateLocalStorage();

}

//funcao que atualiza a lista no localStorage quando adicionar o remover filme
//tem que fazer a chamada dela nas funcoes de remover e adicionar filme
function updateLocalStorage() {
  localStorage.setItem('movieList', JSON.stringify(movieList));

}

for (const movieInfo of movieList) {
  updateUI(movieInfo);

}

//chama a funcao com o click no button
searchButton.addEventListener("click", searchButtonClickHandler);
