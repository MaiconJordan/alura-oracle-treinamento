
var sorteado = Math.round(Math.random() * 5)

var input = document.querySelector("input")

function verifica(){
    if(input.value == sorteado){

        document.write("VOCÊ ACERTOU")
    } else {
        alert("VOCÊ ERROU!!!!!")
    }

    input.value = "";
    input.focus();
    
}


var butao = document.querySelector("button")

butao.onclick = verifica

