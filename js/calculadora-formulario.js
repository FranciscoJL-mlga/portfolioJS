function calcular(){

    //* 1- Captación de datos
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let sumar = document.getElementById("sumar").checked;
    let restar = document.getElementById("restar").checked; 
    let multiplicar = document.getElementById("multiplicar").checked; 
    let dividir = document.getElementById("dividir").checked; 
    let suma, resta, multiplicacion, division; // contendrá las operaciones

    let resultado = " ";

    //* 2- Cáculo con switch

    if(sumar){
       suma = n1 + n2;
       resultado += "<br>La suma es: " + suma;
    }

    if(restar){
        resta = n1 - n2;
        resultado += "<br>La resta es: " + resta;
    }

    if(multiplicar){
        multiplicacion = n1 * n2;
        resultado += "<br>La multiplicacion es:  " + multiplicacion;
    }

    if(dividir){
        division = n1 / n2;
        resultado += "<br>La division da: " + division;
    }

    //* 3- Mostrar resultado

    document.getElementById("resultado").innerHTML = resultado;
 

    return false 
}

/* function sumar(){

    //1-captacion de datos
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);
    //2-calculo

    let suma =n1 +n2;

    //3-display 

    document.getElementById("resultado").innerHTML="El resultado es: " + suma;

    return false;//oara que se pare el doc html, freno la simulacion
}



function restar(){

    //1-captacion de datos
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);
    //2-calculo

    let suma =n1 - n2;

    //3-display 

    document.getElementById("resultado").innerHTML="El resultado es: " + suma;

    return false;//oara que se pare el doc html, freno la simulacion
}

function multiplicar(){

    //1-captacion de datos
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);
    //2-calculo

    let suma =n1 * n2;

    //3-display 

    document.getElementById("resultado").innerHTML="El resultado es: " + suma;

    return false;//oara que se pare el doc html, freno la simulacion
}

function dividir(){

    //1-captacion de datos
    let n1 =parseFloat(document.getElementById("numero1").value);
    let n2 =parseFloat(document.getElementById("numero2").value);
    //2-calculo
    if(n2 != 0){

        let suma =n1 /n2;

    }

    

    //3-display 

    document.getElementById("resultado").innerHTML="El resultado es: " + suma;

    return false;//oara que se pare el doc html, freno la simulacion
} */