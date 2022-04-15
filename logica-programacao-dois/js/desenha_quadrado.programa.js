function desenhaQuadrado(x, y, cor){
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')

    pincel.fillStyle = cor
    pincel.fillRect(x, y, 50,50)
    pincel.fillStroke = 'black'
    pincel.strokeRect(x, y, 50,50)

}

for(x = 0 ; x < 600 ; x += 50 ){
    desenhaQuadrado(x, 0 , 'green')
}