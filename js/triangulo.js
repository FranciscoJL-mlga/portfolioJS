function determinarTriangulo() {
    // Captar los valores de los lados
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);

    // Verificar que los lados son números válidos y mayores que cero
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce tres números válidos y mayores que cero.";
        return false;
    }

    // Determinar el tipo de triángulo
    let resultado;
    if (lado1 === lado2 && lado2 === lado3) {
        resultado = "El triángulo es equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado = "El triángulo es isósceles.";
    } else {
        resultado = "El triángulo es escaleno.";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = resultado;
    return false; // Para prevenir el envío del formulario
}
