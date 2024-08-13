'use strict';

const animarTexto = (elemento) => {
    const numeroLetras = elemento.dataset.texto.length;
    // Activamos el cursor cuando comienza la animacion.
    const cursor = elemento.querySelector(".hero__cursor");
    cursor.classList.add("hero__cursor--visible");
    // Por cada letra, la agregamos al DOM con 100ms de separacion
    for(let i = 0; i < numeroLetras; i++){
        setTimeout(() => 
            {
            const letra = document.createElement("span");
            letra.append(elemento.dataset.texto[i]);
            elemento.append(letra);
        }, 100 * i);
        
    }
    // cambiamos la clase del cursor cuando termine la animacion de letras
    setTimeout(() => {
        // obtenemos los cursores 
        const cursores = [...elemento.closest(".hero__header").querySelectorAll(".hero__cursor")];
        // obtenemos el index del cursor actual
        const indexCursorActual = cursores.indexOf(cursor);
        // comprobamos que el cursor no sea el ultimo
        if(indexCursorActual < cursores.length - 1){
            // si no es el ultimo, ocultamos el cursor
            cursor.classList.remove("hero__cursor--visible");
        }else {
            // si es el ultimo, le ponemos la clase de active 
            cursor.classList.add("hero__cursor--active");
          
        }
    }, numeroLetras * 100);
    // Retornamos una promesa para saber cuando la animacion acabe
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 100))



};

const galeria = document.getElementById("trabajos");

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting){
        const trabajos = document.querySelectorAll(".trabajos__imagenes a");
        trabajos.forEach( (trabajo, index) => {
            setTimeout(() =>{
                trabajo.classList.add("trabajos__trabajo--visible");

            },200 * index);
        });
    }
    
}, {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
});

observer.observe(galeria);

const trabajos = document.getElementById("trabajos");
const ventanaTrabajos = document.getElementById("ventana-trabajos");



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
    e.preventDefault();
    // comprobamos que el usuario de click en un trabajo
    const trabajoClickeado = e.target.closest(".trabajos__trabajo ");
  if(trabajoClickeado){
    // obtenemos el id del trabajo clickeado
    const id = trabajoClickeado.dataset.id;

    const trabajoFiltrado = datos.filter((trabajo) =>{
      
        if(trabajo.id === id){
            return trabajo;

        }
    });
    const {titulo, fecha, texto} = trabajoFiltrado[0];


  
    ventanaTrabajos.querySelector(".ventana__titulo").innerText = titulo;
    ventanaTrabajos.querySelector(".ventana__fecha").innerText = fecha;
    ventanaTrabajos.querySelector(".ventana__parrafo").innerText = texto;
    ventanaTrabajos.querySelector(".ventana__imagen").src = trabajoClickeado.querySelector("img").src;
    
    ventanaTrabajos.classList.add("ventana--active");

  }
});

// EventListener para cerrar la ventana 

ventanaTrabajos.querySelector("button[data-action=cerrar-ventana]").addEventListener("click", (e) =>{
    e.preventDefault();
    ventanaTrabajos.classList.remove("ventana--active");
});

ventanaTrabajos.querySelector(".ventana__overlay").addEventListener("click", (e) => {
    e.preventDefault();
    // matches metodo sirve para que al darle click a la imagen no se le incluya  remove classList
    if(e.target.matches(".ventana__overlay")){
        ventanaTrabajos.classList.remove("ventana--active");

    }
});

const slider = document.getElementById("slider");

let clickPresiona = false;
let coordenadaInicial;
let scrollLeft;
const presiona = (e) => {
    clickPresiona = true;
    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    console.log(coordenadaInicial);
    console.log("pageX", e.pageX);
    console.log("slider-offsetleft:", slider.offsetLeft);
    console.log("scrollLeft:", slider.scrollLeft);
};
const mueve = (e) => {
    if(!clickPresiona){
        return;
    }
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;
    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) =>{
    clickPresiona = false;
     console.log("suelta");
    };

slider.addEventListener("mousedown", presiona);
slider.addEventListener("mousemove", mueve);
slider.addEventListener("mouseup", suelta);

const abrirCorreo = document.querySelectorAll("[data-action=abrir-ventana-correo]");
const ventanaCorreo = document.getElementById("ventana-correo");
const cerrarCorreo = document.querySelectorAll("[data-action=cerrar-ventana]");
abrirCorreo.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        ventanaCorreo.classList.add("ventana--active");
        
        
    });
});
cerrarCorreo.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        ventanaCorreo.classList.remove("ventana--active");

    });
});

window.addEventListener("load", async() => {
    await animarTexto(document.querySelector(".hero__titulo--uno"));
     await animarTexto(document.querySelector(".hero__titulo--dos"));
      
     document.querySelectorAll(".hero__burbuja")[0].classList.add("hero__burbuja--active-1");
    document.querySelectorAll(".hero__burbuja")[1].classList.add("hero__burbuja--active-2");
     
    });
//# sourceMappingURL=bundle.js.map
