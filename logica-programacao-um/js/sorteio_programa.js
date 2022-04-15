/*
function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}


var numeroSorteado = 3 //Math.round(Math.random() * 10);
var tentativas = 3;

for(i = 0 ; i < tentativas ; i++){
    var chute = parseInt(prompt("Digite o número sorteado"))
    if(chute == numeroSorteado){
        mostra("PARABÉNS VOCÊ ACERTOU !!")
        pulaLinha();
        break;        
    } else {
        mostra("VOCÊ ERROU TENTE MAIS UMA VEZ");
        pulaLinha();
    }
}

mostra(numeroSorteado) 


*/






    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while(tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute!"));

    if(chute == numeroPensado) {

        mostra("Você ACERTOU, o número pensado era " + numeroPensado);
        break;

    } else {

        mostra("Você ERROU!");
    }

    tentativas++;
}

mostra("FIM");

