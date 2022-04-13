function pulaLinha(){
    document.write("<br>")
}  

function mostra (msg){
document.write(msg);      
}


var totalFamiliares = parseInt(prompt("Quantos familiares tem?"))

var totalIdades = 0
for(i = 0 ; i < totalFamiliares ; i++){
   
    var idade = parseInt(prompt("Digite a idade do primeiro Familiar"))
    totalIdades = totalIdades + idade    
}

mostra(totalIdades)
mostra("A media das idades é " + totalIdades/totalFamiliares)