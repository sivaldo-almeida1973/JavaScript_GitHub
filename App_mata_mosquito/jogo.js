//econtra a altura e a largura (window)
//declarar as variaveis no escopo global
var altura = 0
var largura = 0

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
     
    //Math.flor(arredonda pra baixo)  Math.random(gera numero aleatorio)
    var posicaoX = Math.floor( Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //ajustar caso posicao seja = 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoX = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento html (img) para inserir imagem dinamicamente
    //var mosquito guarda a referencia que quero adicionar no body
    var mosquito = document.createElement('img') //criar html(img)
    mosquito.src = 'imagens/mosquito.png' //src
    mosquito.className = 'mosquito1' // referente ao estilo css da img
    //posicionamento domosquito
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.left = posicaoY + 'px'
    mosquito.style.position = 'absolute'
   
    document.body.appendChild(mosquito) //acessar o boby e inclui img

}