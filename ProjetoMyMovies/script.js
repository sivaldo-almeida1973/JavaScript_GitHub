const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name")
const movieYear = document.getElementById("movie-year")

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
    createModal(data)
    overlay.classList.add('open');

  }catch (error) {//usa bliblioteca de erros
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


//chama a funcao com o click no button
searchButton.addEventListener("click", searchButtonClickHandler);
