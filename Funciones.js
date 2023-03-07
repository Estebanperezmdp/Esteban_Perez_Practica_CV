console.log("CV interaccion");

document.getElementById("estadolaboral").onclick = function(){
    
    document.getElementById("resultado").innerHTML= "Estoy disponible, continuo desempleado, puedes completar el formulario presentado debajo. Muchas gracias!";
    document.getElementById('consulta').style.display= "block";
};


document.getElementById("enviarconsulta").addEventListener('click',function(){
    let nomb= document.getElementById("imputnombre").value;
    let correo = document.getElementById("imputcorreo").value;
    /**console.log("El usuario a ingresado los siguientes datos: "+nomb+" "+correo);*/
    if (nomb=="" || correo==""){
        document.getElementById("resultado").innerHTML= "Alguno de los campos se encuentra vacio."; 
        document.getElementById("resultado").style.backgroundColor= '#e08383';
        if (nomb==""){
            document.getElementById("imputnombre").style.backgroundColor= '#e08383';
          
        } 
        
        if (nomb==""){
            document.getElementById("imputcorreo").style.backgroundColor= '#e08383';
          
        } 

    }else{
   
        document.getElementById("imputnombre").style.backgroundColor= 'white';
        document.getElementById("imputcorreo").style.backgroundColor= 'white';

        document.getElementById("resultado").style.backgroundColor= '#6260ce';
        document.getElementById("resultado").innerHTML= "Muchas gracias!, me comunicaré en breve.";
        document.getElementById('consulta').style.display= "none";
    }
    
}
);


