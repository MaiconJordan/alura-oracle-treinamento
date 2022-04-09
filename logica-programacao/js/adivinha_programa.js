function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}

var numero = Math.round( Math.random() * 10);

var chute = parseInt(prompt("Digite um número:"));


if(numero == chute ){
    mostra("Parabens você acertou o númuero");
} else {
    
    mostra("Que pena! você errou.")
    pulaLinha();
    mostra("Número correto é: " + numero)
}