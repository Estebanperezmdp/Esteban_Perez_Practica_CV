console.log("CV interaccion");

document.getElementById("estadolaboral").onclick = function(){
    
    document.getElementById("resultado").innerHTML= "Estoy disponible, continuo desempleado, puedes completar el formulario presentado debajo. Muchas gracias!"
};


document.getElementById("enviarconsulta").addEventListener('click',function(){
    let nomb= document.getElementById("nombreconsulta").value;
    let correo = document.getElementById("correoconsulta").value;
    /**console.log("El usuario a ingresado los siguientes datos: "+nomb+" "+correo);*/
    document.getElementById("resultado").innerHTML= "Muchas gracias!, me comunicaré en breve.";
}
);


