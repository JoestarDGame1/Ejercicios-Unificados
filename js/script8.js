function info(cadena){
    var resultado = "La cadena \""+cadena+"\" ";

    if (cadena == cadena.toUpperCase())
        resultado += "Esta formada solo por mayusculas";
    else if (cadena == cadena.toLowerCase())
        resultado += "Esta formada solo por minusculas";
    else 
        resultado += "Esta formada solo por mayusculas y minusculas";
    return resultado;
}
alert(info("OVNI = OJETO VOLADOR NO IDENTIFICADO"));
alert(info("En lugar de la mancha..."));
alert(info("aprendiendo javascript..."));