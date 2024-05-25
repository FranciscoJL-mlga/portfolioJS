/*********************
 * 
 * 
 * 
 * 
 * 
 * 
 */

function diviEuclides(){

    let divi =parseInt(document.getElementById("dividendo").value);
    let disor =parseInt(document.getElementById("divisor").value);
    let cociente=0;
    let resto=0;
    if(isNaN(divi)||isNaN(disor)){

        document.getElementById("resultado").innerHTML= "Tienes que introducir dos numeros";
    
    }else{


        while(divi>=disor){//20 y 2
            divi-=disor;
            cociente++;
            
            
        }
        document.getElementById("resultado").innerHTML= "El cociente es "+ cociente +" y el resto es "+divi ;
    }
    return false;
}   


