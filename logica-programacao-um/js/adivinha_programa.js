function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}

/* var numero = Math.round( Math.random() * 10);

var chute = parseInt(prompt("Digite um número:"));


if(numero == chute ){
    mostra("Parabens você acertou o númuero");
} else {
    
    mostra("Que pena! você errou.")
    pulaLinha();
    mostra("Número correto é: " + numero)
} */

// Exercicio de Refatoração 

function sorteia(n) {
    
    return Math.round(Math.random() * n)  ;

    
}

var numeroSorteado = sorteia(10);
var chute = parseInt(prompt("Chute um número"));

if(numeroSorteado == chute){
    mostra("Parabéns você acertou o número sorteado")
    pulaLinha();
    mostra("Número " + numeroSorteado);

} else {
    mostra("Você errou");
    pulaLinha();

    if(numeroSorteado > chute){
        mostra("Número é maior que o seu chute")
    } else {
        mostra("Número menor que seu chute");
    }
}





