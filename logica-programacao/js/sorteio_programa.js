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
