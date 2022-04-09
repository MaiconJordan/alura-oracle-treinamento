function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}




var vitoria = parseInt(prompt("Quantas virotiras seu time tem?"));

var empates = parseInt( prompt("Quantos empates seu time tem?"));

var pontos = (vitoria * 3) + empates;

mostra("Seu time tem " + pontos + " pontos!");
pulaLinha();





if(pontos > 28 ){
    mostra("Seu time está melhor do que ano passado");
} 

if(pontos < 28 ){
    mostra("Seu time está pior do que ano passado");
} 

if(pontos == 28 ){
    mostra("Seu time está igual do que ano passado");
} 