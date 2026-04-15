function valida(campo){
    if (campo.value === "") {
        alert("Faltan datos");
        return false;
    } else if (!campo.value.match(/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$/)) {
        alert("No tiene formato de CURP");
        return false;
    }
    return true;
}