// PROGRAMA QUE CONTA NUMERO DE TENTATIVAS DE LOGIN DO USUÁRIO
//MAXIMO DE 3 TENTATIVAS
function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}
/*

var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        alert("Bem-vindo ao sistema, " + loginInformado);

        tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

    } else {

        if (tentativaAtual == 3) {
            alert("Número permitido de tentativas ultrapassado!");
        } else {
            alert("Login inválido. Tente novamente");
        }
    }

   // vai para a próxima tentativa
    tentativaAtual = tentativaAtual +1  
}*/

//TABUADA COM FOR

for(i = 1 ; i <= 10 ; i++){
    mostra("A multiplicação de " + i + " x 5 " + " é " + i *5)
    pulaLinha();
}