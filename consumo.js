
//Declaracion de Arrays
const Electrodomestico = [];

//Declaracion de variales
let consumo = 0;
let mensaje = " ";
let cont = 0;
let i = 0;
let opcion = 0;
let horas = 0;

//Carga manual de objetos Elect al Array Electrodomesticos
const elec1 = new Elect ("Refrigeracion", "Freezer", 0.05); Electrodomestico.push (elec1);
const elec2 = new Elect ("Refrigeracion", "Heladera con freezer", 0.08); Electrodomestico.push (elec2);
const elec3 = new Elect ("Refrigeracion", "Heladera sin freezer", 0.03); Electrodomestico.push (elec3);
const elec4 = new Elect ("Linea Blanca", "Lavarropa Automático", 0.18); Electrodomestico.push (elec4);
const elec5 = new Elect ("Linea Blanca", "Aspiradora", 0.68); Electrodomestico.push (elec5);
const elec6 = new Elect ("Linea Blanca", "Plancha", 0.6); Electrodomestico.push (elec6);
const elec7 = new Elect ("Linea Blanca", "Estractor de Aire", 0.12); Electrodomestico.push (elec7);
const elec8 = new Elect ("Audio y Video", "TV 32' LED", 0.2); Electrodomestico.push (elec8);
const elec9 = new Elect ("Audio y Video", "Notebook", 0.1); Electrodomestico.push(elec9);

//Creacion de Array por Categoria a partir del Array General
//Crear el Array de Refri
const Refri = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Refrigeracion"));
//Crear el Array de Lblanca
const Lblanca = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Linea Blanca"));
//Crear el Array de Avideo
const Avideo = Electrodomestico.filter ((Elect)=>Elect.clase.includes ("Audio y Video"));



//Interaccion con el uruario
let inicio = prompt("¿Que desea realizar?:\n\n1) - Calcular Consumo\n0) - Salir");
//Bucle de continuacion
while (inicio != 0){
    let categoria = parseInt(prompt("Seleccione una categoria:\n\n1) - Refrigeracion\n2) - Linea Blanca\n3) - Audio y Video\n\n0) - Salir"))
    if(categoria == 1){
        mensaje = "Seleccione un electrodomestico:\n\n";
        i=1;
        if(i<=Refri.length){   //Barrido del Array Refri, para crear un menu de opciones
            Refri.forEach((Elect)=> {               
            mensaje += i + ") " + Elect.nombre + "\n";
            i++;
            })
            opcion = parseInt(prompt(mensaje));
        }
        switch (opcion){
            case 1://freezer
                if(carga_horas()){
                    consumo =+ ( horas * elec1.kwh);
                    break;
                }    
            case 2://heladera con freezer
                if(carga_horas()){
                    consumo = consumo + ( horas * elec2.kwh);
                    break;
                }    
            case 3://heladera sin freezer
                if(carga_horas()){
                    consumo = consumo + ( horas * elec3.kwh);
                    break;
                }    
        } 
    } else if (categoria == 2){
        mensaje = "Seleccione un electrodomestico:\n";
        i=1;
        if(i<=Lblanca.length){   //Barrido del Array Lblanca, para crear un menu de opciones
            Lblanca.forEach((Elect)=> {               
            mensaje += i + ") " + Elect.nombre + "\n";
            i++;
            })
            opcion = parseInt(prompt(mensaje));
        }
        switch (opcion){
            case 1://lavarropa automatico
                if(carga_horas()){
                    consumo = consumo + ( horas * elec4.kwh);
                    break;
                }    
            case 2://aspiradora
                if(carga_horas()){
                    consumo = consumo + ( horas * elec5.kwh);
                    break;
                }    
            case 3://plancha
                if(carga_horas()){
                    consumo = consumo + ( horas * elec6.kwh);
                    break;
                }    
            case 4://extractor
                if(carga_horas()){
                    consumo = consumo + ( horas * elec7.kwh);
                    break;
                }    
        }
    } else if(categoria == 3){
        mensaje = "Seleccione un electrodomestico:\n";
        i=1;
        if(i<=Avideo.length){   //Barrido del Array Avideo, para crear un menu de opciones
            Avideo.forEach((Elect)=> {               
            mensaje += i + ") " + Elect.nombre + "\n";
            i++;
            })
            opcion = parseInt(prompt(mensaje));
        }
        switch (opcion){
            case 1://TV 32 LED
                if(carga_horas()){
                    consumo = consumo + ( horas * elec8.kwh);
                    break;
                }    
            case 2://notebook
                if(carga_horas()){
                    consumo = consumo + ( horas * elec9.kwh);
                    break;
                }    
        }
    }else {
        inicio = prompt("¿Desea continuar?:\n\n1) - Si, Continuar cargando electrodomesticos\n0) - No, Terminar y mostrar rescultado"); 
    }
}

//Calculo final y muestra de resultados
let consuMes = consumo * 30;
alert (`Resumen estimativo de consumo:\n\nCantidad de electrodomésticos: ${cont} \nCantidad de kw consumidos en 24hs: ${parseInt(consumo)}kw \nCantidad de kw consumidos en 30 días: ${parseInt(consuMes)}kw.`);

