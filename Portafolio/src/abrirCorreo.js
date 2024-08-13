const abrirCorreo = document.querySelectorAll("[data-action=abrir-ventana-correo]");
const ventanaCorreo = document.getElementById("ventana-correo")
const cerrarCorreo = document.querySelectorAll("[data-action=cerrar-ventana]")
abrirCorreo.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault()
        ventanaCorreo.classList.add("ventana--active")
        
        
    });
})
cerrarCorreo.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault()
        ventanaCorreo.classList.remove("ventana--active")

    })
})

