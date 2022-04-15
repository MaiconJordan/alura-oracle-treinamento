var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

pincel.fillStyle = 'gray'
pincel.fillRect(0, 0 ,600, 400);

var cores = ['blue','red','green']
var indiceCorAtual = 0 // começa com blue

function desenhaCirculo (evento){
    
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    pincel.fillStyle = cores[indiceCorAtual]
    pincel.beginPath()
    pincel.arc(x, y, 10, 0, 2 * 3.14)
    pincel.fill()

}

tela.onclick = desenhaCirculo


function mudaCor() {

    indiceCorAtual++
    if(indiceCorAtual >= cores.length){
        indiceCorAtual = 0
    }    
    return false;
}

tela.oncontextmenu = mudaCor;