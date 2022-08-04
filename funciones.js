//Verificacion de valor hora
function verifHoras(horas){
    if (isNaN(horas)){
        alert("Ingresá un número válido");
        return false;
    }
    else if ((horas) < 1 || (horas) > 24){
        alert("Ingresá un número entre 1 y 24");
        return false;
    }
    return true;
}

//Carga de horas
function carga_horas(){
    horas = prompt("Ingrese la cantidad de horas de uso durante un día");
    if(verifHoras(horas)){
        cont++;
        return true;
    }
    return false;
}


