var imagen = document.getElementById("imagenes");

imagen = !imagen;

imagen.addEventListener('click', function() {
    if(imagen.width === 350){
        imagen.width = "500px";
    } 
    else{
        imagen.style.width = "350px";
    }
});


