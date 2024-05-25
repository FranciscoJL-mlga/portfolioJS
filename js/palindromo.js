function verificarGenerarPalindromo() {
    // Captar la cadena de caracteres
    let cadena = document.getElementById("cadena").value;

    // Verificar si la cadena es un palíndromo
    if (cadena === cadena.split('').reverse().join('')) {
        document.getElementById("resultado").innerHTML = "La cadena es un palíndromo.";
    } else {
        // Generar el palíndromo concatenando la cadena original con su inversa
        let palindromo = cadena + cadena.split('').reverse().join('');
        document.getElementById("resultado").innerHTML = "La cadena no es un palíndromo. El palíndromo generado es: " + palindromo;
    }

    return false; // Para prevenir el envío del formulario
}
