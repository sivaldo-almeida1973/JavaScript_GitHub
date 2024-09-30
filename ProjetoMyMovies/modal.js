
const background = document.getElementById("modal-background");
const modalContainer = document.getElementById('modal-container');

//filme atual
let currentMovie = {};

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

//funcao que fecha o modal
function closeModal() {
  overlay.classList.remove("open");
}

//adiciona o filme atual a lista(chamando as funcoes)
function addCurrentMovieToList() {
  if (isMovieAlreadyOnList(currentMovie.imdbID)) {
    notie.alert({type: "error", text: "Filme ja existe na sua lista!"});
    return;
  }
  addToList(currentMovie);  //adiciona o filme atual a lista
  updateUI(currentMovie);  //atualiza a interface
  updateLocalStorage();//chamada da funcao 
  closeModal();


}

//funcao que abre o modal
function createModal(data) {
  //atualiza o dodal
  currentMovie = data;

  modalContainer.innerHTML = `
      <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
      <section id="modal-body">

          <img 
          id="movie-poster" 
          src=${data.Poster} 
          alt="Poster do filme.">

          <div id="movie-info">
              <h3 id="movie-plot">
                ${data.Plot}
              </h3>

              <div id="movie-cast">
                <h4>Elenco:</h4>
                <h5>${data.Actors}</h5>
              </div>
              
              <div id="movie-genre">
                <h4>Gênero:</h4>
                <h5>${data.Genre}</h5>
              </div>
            </div>

      </section>  
      <section id="modal-footer">
          <button id="add-to-list" onclick='{addCurrentMovieToList()}'>Adicionar à Lista</button>
      </section>
  
  `;
}


background.addEventListener("click", backgroundClickHandler);






