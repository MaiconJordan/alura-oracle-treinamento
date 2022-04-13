
var sorteado = Math.round(Math.random() * 5)

var input = document.querySelector("input")

function verifica(){
    if(input.value == sorteado){

        alert("VOCÊ ACERTOU")
    } else {
        alert("VOCÊ ERROU!!!!!")
    }
    
}


var butao = document.querySelector("button")

butao.onclick = verifica

