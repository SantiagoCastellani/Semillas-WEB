///////Mensaje de contacto
function mensaje() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;

    if (nombre != "") {
        if (apellido != "") {
            if (email != "") {
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
                    alert("CONTACTO\n" + nombre + " " +apellido + " ha enviado un mensaje de contacto.\nEmail: " + email);                               
                    document.getElementById("nombre").value = "";
                    document.getElementById("apellido").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("empresa").value = "";
                    document.getElementById("telefono").value = "";
                } else {
                    alert("La dirección de email es incorrecta.");
                }
            }
        }     
    }
}
//Evento del botón ENVIAR
var boton = document.getElementById('boton-enviar');
boton.addEventListener("click", mensaje);
