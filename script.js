function converte(){
    var temperaturainicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("cf").checked){
        resultado = (temperaturainicial * 9/5) + 32
    }
    else if(document.getElementById("fc").checked){
        resultado = (temperaturainicial - 32) * 5/9
    }
    else if(document.getElementById("ck").checked){
        resultado = (temperaturainicial + 273.15)
    }
    else if(document.getElementById("kc").checked){
        resultado = (temperaturainicial - 273.15)
    }
    else if(document.getElementById("fk").checked){
        resultado = ((temperaturainicial - 32) * 5/9) + 273.15
    }
    else if(document.getElementById("kf").checked){
        resultado = ((temperaturainicial - 273.15) * 9/5) + 32
    }
    else{
        resultado = "Por favor, selecione uma opção!"
        alert(resultado)
    }
    document.getElementById("resultado").innerHTML = resultado
}