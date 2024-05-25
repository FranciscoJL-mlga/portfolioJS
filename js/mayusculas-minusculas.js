function determinarMayusculasMinuculas() {
    // Captar la cadena de caracteres
    let cadena = document.getElementById("cadena").value;

    // Verificar si la cadena está en mayúsculas, minúsculas o ambas
    if (cadena === cadena.toUpperCase()) {
        document.getElementById("resultado").innerHTML = "La cadena está en mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        document.getElementById("resultado").innerHTML = "La cadena está en minúsculas.";
    } else {
        document.getElementById("resultado").innerHTML = "La cadena está en mayúsculas y minúsculas.";
    }

    return false; // Para prevenir el envío del formulario
}
