const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function mostrarNombreMes() {
    // Captar el número de mes seleccionado
    let numeroMes = parseInt(document.getElementById("numeroMes").value);

    // Verificar que se ha seleccionado un número de mes válido
    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        document.getElementById("resultado").innerHTML = "Por favor, selecciona un número de mes válido.";
        return false;
    }

    // Obtener el nombre del mes correspondiente
    let nombreMes = meses[numeroMes - 1];

    // Mostrar el nombre del mes en la pantalla
    document.getElementById("resultado").innerHTML = "El mes seleccionado es " + nombreMes;

    return false; // Para prevenir el envío del formulario
}
