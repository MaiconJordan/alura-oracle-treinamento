var segredos = [5,7,10,2,3];

var input = document.querySelector("input");
    input.focus();

function verifica() {

for(var posicao = 0; posicao < segredos.length; posicao++) {

    if(input.value == segredos[posicao]) {

        alert("Você ACERTOU!");
        
        break;
    }
}

if(input.value != segredos[posicao]) {
    alert("Você ERROU!");
}

input.value = "";
input.focus();

}

var button = document.querySelector("button");

button.onclick = verifica;
