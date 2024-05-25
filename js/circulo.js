function calcularPropiedades() {
    // Captar el valor del radio
    let radio = parseFloat(document.getElementById("radio").value);

    // Verificar que el radio es un número válido
    if (isNaN(radio) || radio <= 0) {
        document.getElementById("resultados").innerHTML = "Por favor, introduce un radio válido.";
        return false;
    }

    // Calcular la longitud de la circunferencia
    let longitud = 2 * Math.PI * radio;

    // Calcular el área del círculo
    let area = Math.PI * Math.pow(radio, 2);

    // Calcular el volumen de la esfera
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    // Mostrar los resultados
    document.getElementById("resultados").innerHTML = 
        "La longitud de la circunferencia es: " + longitud.toFixed(2) + "<br>" +
        "El área del círculo es: " + area.toFixed(2) + "<br>" +
        "El volumen de la esfera es: " + volumen.toFixed(2);

    return false; // Para prevenir el envío del formulario
}
