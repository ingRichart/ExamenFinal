var imagen = document.querySelectorAll("imagenes");

imagen = !imagen;

imagen.addEventListener('click', function() {
    if(imagen.width === "350px"){
        imagen.style.width = "500px";
    } 
    else{
        imagen.style.width = "350px";
    }
});


