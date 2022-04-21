



var paciente = document.querySelectorAll(".paciente");

for(i = 0; i < paciente.length; i++){

    var tdPeso = paciente[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente[i].querySelector(".info-altura")
    var altura = tdAltura.textContent;
    var tdIMC = paciente[i].querySelector(".info-imc")
    
    var pesoValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 500){
        pesoValido = false;
        tdIMC.textContent = 'Peso inválido'
    
    } else if (altura <= 0 || altura >= 3.00){
        alturaValida = false;
        tdIMC.textContent = 'Altura inválida'
    } else {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
    


}




