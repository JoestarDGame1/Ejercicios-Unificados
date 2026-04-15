function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date();
    var dCapt = null;

    if (campo.value == ""){
        alert("Faltan datos");
    } else {
        dCapt = validaFecha(campo.value);

        if (dCapt != null && dCapt < dHoy){
            bRet = true;
        } else {
            alert("La fecha debe ser menor a la fecha actual");
        }
    }
    return bRet;
}

function validaFecha(valor){
    var dConvertida = null;
    var nAnio=0, nMes=0, nDia = 0;

    if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){

        nDia = parseInt(valor.substring(0,2), 10);
        nMes = parseInt(valor.substring(3,5), 10);
        nAnio = parseInt(valor.substring(6,10), 10);

        if (nDia <1 || nDia>31){
            alert("El día no es válido");
        } else if (nMes <1 || nMes>12){
            alert("El mes no es válido");
        } else if ((nMes==4 || nMes==6 || nMes==9 || nMes==11) && nDia > 30){
            alert("El mes tiene máximo 30 días");
        } else if (nMes==2 && ((nDia>29) || (nAnio%4!=0 && nDia>28))){
            alert("Febrero tiene 28 días o 29 en bisiesto");
        } else {
            dConvertida = new Date();
            dConvertida.setFullYear(nAnio, nMes-1, nDia);

            // SOLO si es válida
            creasigno(nDia,nMes);
        }

    } else {
        alert("No tiene formato de fecha (dd/mm/aaaa)");
    }

    return dConvertida;
}

function creasigno(nDia,nMes){

    var newDiv = document.createElement("div");
    var newContent;

    if((nDia>20 && nMes==3) || (nDia <=20 && nMes==4))
        newContent = document.createTextNode("SIGNO ARIES");
    else if ((nDia>20 && nMes==4) || (nDia <=20 && nMes==5))
        newContent = document.createTextNode("SIGNO TAURO");
    else if ((nDia>20 && nMes==5) || (nDia <=20 && nMes==6))
        newContent = document.createTextNode("SIGNO GEMINIS");
    else if ((nDia>20 && nMes==6) || (nDia <=22 && nMes==7))
        newContent = document.createTextNode("SIGNO CANCER");
    else if ((nDia>22 && nMes==7) || (nDia <=23 && nMes==8))
        newContent = document.createTextNode("SIGNO LEO");
    else if ((nDia>23 && nMes==8) || (nDia <=22 && nMes==9))
        newContent = document.createTextNode("SIGNO VIRGO");
    else if ((nDia>22 && nMes==9) || (nDia <=22 && nMes==10))
        newContent = document.createTextNode("SIGNO LIBRA");
    else if ((nDia>22 && nMes==10) || (nDia <=22 && nMes==11))
        newContent = document.createTextNode("SIGNO ESCORPIO");
    else if ((nDia>22 && nMes==11) || (nDia <=21 && nMes==12))
        newContent = document.createTextNode("SIGNO SAGITARIO");
    else if ((nDia>21 && nMes==12) || (nDia <=21 && nMes==1))
        newContent = document.createTextNode("SIGNO CAPRICORNIO");
    else if ((nDia>21 && nMes==1) || (nDia <=21 && nMes==2))
        newContent = document.createTextNode("SIGNO ACUARIO");
    else if ((nDia>22 && nMes==2) || (nDia <=20 && nMes==3))
        newContent = document.createTextNode("SIGNO PISCIS");

    newDiv.appendChild(newContent);

    // MOSTRAR RESULTADO
    var contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""; // limpia antes
    contenedor.appendChild(newDiv);

    newDiv.style = "border: 3px solid #999; background:#54b51e; width:200px; height:100px; display:flex; align-items:center; justify-content:center;";
}