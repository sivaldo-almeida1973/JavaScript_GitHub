//econtra a altura e a largura (window)
//declarar as variaveis no escopo global
var altura = 0
var largura = 0
vidas = 1  // alterar o coracao
var tempo = 10 //cronometro

var criaMosquitoTempo = 1500 //tempo inicia 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')//substituir ? por vazio ""

//logica do tempo
if(nivel === 'normal') {
  //1500
  criaMosquitoTempo = 1500

}else if(nivel === 'difícil') {
  //1000
  criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris') {
  //750
  criaMosquitoTempo = 750
}

function ajustaTamahoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
 

  console.log(altura,largura)
}
//chamada
ajustaTamahoPalcoJogo()
// fim da definicao da largura e altura=======================

//fluxo de vitoria==============================================
var cronometro = setInterval(function() {
  tempo -= 1  //e atribuir no texto html -1 a cada 1segundo

  if(tempo < 0) {
    clearInterval(cronometro)//para de crementar o cronometro
    clearInterval(criaMosquito)//para de criar o mosquito
    window.location.href = 'vitoria.html'
    // alert('vitoria')
  } else {
    //irá inserir o valor da (var tempo )dentro da tag span(html)
    document.getElementById('cronometro').innerHTML = tempo
  }
 
  
}, 1000)


//fluxo de fim de jogo
function posicaoRandomica() {

    //remover mosquito anterior caso exista
    if( document.getElementById('mosquito')) {      
      document.getElementById('mosquito').remove()

      //alterar o carocao para vazio e se for maior que 3 para o jogo
      if(vidas > 3) {
        window.location.href = 'fim_de_jogo.html'
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

    //criar elementos html  dinamicamente
    var mosquito = document.createElement('img') //criar html(img)
    mosquito.src = 'imagens/mosquito.png' //src
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//chama 
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