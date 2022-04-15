function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}


var anoCopa = parseInt(prompt("primeiro ano?"))
var anoAtual = 2022
var limite = parseInt(prompt("Digite até que ano você quer a copa?"))

for(anoCopa = anoCopa ; anoCopa <= limite ; anoCopa += 4){
    mostra(anoCopa);
    pulaLinha();
} 








