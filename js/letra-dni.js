/******************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ******/

function calculoLetra(){
    let dni =parseInt(document.getElementById("dni").value);
    const LETRA="TRWAGMYFPDXBNJZSQVHLCKE";


        document.getElementById("resultado").innerHTML ="El valor no es valido";
    
        let resto =dni%23;
        document.getElementById("resultado").innerHTML ="La letra es : "+ LETRA[resto];
    


        
    return false;
}
