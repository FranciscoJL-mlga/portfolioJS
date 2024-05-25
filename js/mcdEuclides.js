function calcularMCD() {
    // 1. Captación de datos
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);

    // 2. Verificación de entrada
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado").innerHTML = "Tienes que introducir dos números válidos";
        return false;
    }

    // 3. Método de Euclides para calcular el MCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    // 4. Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "El MCD es " + a;

    return false; // Para prevenir el envío del formulario
}