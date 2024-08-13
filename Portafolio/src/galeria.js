const trabajos = document.getElementById("trabajos")
const ventanaTrabajos = document.getElementById("ventana-trabajos")



const datos = [
    {
        id: "1",
        titulo: "Trabajo #1",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?",        
        fecha: "1 Enero 2024",
    },
    {
        id: "2",
        titulo: "Trabajo #2",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?" ,                      fecha: "1 Enero 2024"
    },
    {
        id: "3",
        titulo: "Trabajo #3",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?",                        fecha: "1 Enero 2024"
    },
    {
        id: "4",
        titulo: "Trabajo #4",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?",                       fecha: "1 Enero 2024"
    },
    {
        id: "5",
        titulo: "Trabajo #5",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?",                        fecha: "1 Enero 2024"
    },
    {
        id: "6",
        titulo: "Trabajo #6",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, blanditiis vero perferendis recusandae quidem facere numquam quis sunt doloremque fugit rerum perspiciatis quisquam alias amet optio voluptatibus ex eum?" ,                       fecha: "1 Enero 2024",
    },
];
trabajos.addEventListener("click", (e) => {
    e.preventDefault()
    // comprobamos que el usuario de click en un trabajo
    const trabajoClickeado = e.target.closest(".trabajos__trabajo ")
  if(trabajoClickeado){
    // obtenemos el id del trabajo clickeado
    const id = trabajoClickeado.dataset.id;

    const trabajoFiltrado = datos.filter((trabajo) =>{
      
        if(trabajo.id === id){
            return trabajo;

        }
    });
    const {titulo, fecha, texto} = trabajoFiltrado[0]


  
    ventanaTrabajos.querySelector(".ventana__titulo").innerText = titulo
    ventanaTrabajos.querySelector(".ventana__fecha").innerText = fecha
    ventanaTrabajos.querySelector(".ventana__parrafo").innerText = texto
    ventanaTrabajos.querySelector(".ventana__imagen").src = trabajoClickeado.querySelector("img").src
    
    ventanaTrabajos.classList.add("ventana--active")

  }
});

// EventListener para cerrar la ventana 

ventanaTrabajos.querySelector("button[data-action=cerrar-ventana]").addEventListener("click", (e) =>{
    e.preventDefault();
    ventanaTrabajos.classList.remove("ventana--active")
});

ventanaTrabajos.querySelector(".ventana__overlay").addEventListener("click", (e) => {
    e.preventDefault()
    // matches metodo sirve para que al darle click a la imagen no se le incluya  remove classList
    if(e.target.matches(".ventana__overlay")){
        ventanaTrabajos.classList.remove("ventana--active")

    }
})