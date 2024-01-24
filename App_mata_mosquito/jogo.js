//econtra a altura e a largura (window)
//declarar as variaveis no escopo global
var altura = 0
var largura = 0
vidas = 1  // alterar o coracao

function ajustaTamahoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
 

  console.log(altura,largura)
}

//chamada da funcao
ajustaTamahoPalcoJogo()
// fim da definicao da largura e altura=======================

 //inciar posicionamento do mosquito aleatorio=============
 //ira ocorrrer um erro (por isso encapsular dentro da funcao) e chamar ela no body
function posicaoRandomica() {

    //remover mosquito anterior caso exista
    if( document.getElementById('mosquito')) {      
      document.getElementById('mosquito').remove()

      //alterar o carocao para vazio e se for maior que 3 para o jogo
      if(vidas > 3) {
        alert('Interrompe o jogo (Game over)')
      }else {
        document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

        vidas ++

      }
    
    }
   
     
    //Math.flor(arredonda pra baixo)  Math.random(gera numero aleatorio)
    var posicaoX = Math.floor( Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //ajustar caso posicao seja = 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento html (img) para inserir imagem dinamicamente
    //var mosquito guarda a referencia que quero adicionar no body
    var mosquito = document.createElement('img') //criar html(img)
    mosquito.src = 'imagens/mosquito.png' //src
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//chama func tamanhoAleatorio
    //posicionamento domosquito
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
      this.remove()//se clicar no mosquito antes de acabar o tempo
    }
   
    document.body.appendChild(mosquito)//aces o boby e inclui img(filho)

  
  

}

//controla o tamanho do mosquito

function tamanhoAleatorio() {
     var classe = Math.floor(Math.random() * 3)
     
     switch(classe) {
      case 0:
        return 'mosquito1'

      case 1:
        return 'mosquito2'

      case 2:
        return 'mosquito3'
     }
}

//ladoAleatorio(imagem)

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)
  
  switch(classe) {
   case 0:
     return 'ladoA'

   case 1:
     return 'ladoB'

  }
}