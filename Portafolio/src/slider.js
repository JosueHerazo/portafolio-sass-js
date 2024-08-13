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
    const distanciaRecorrida = espaciado - coordenadaInicial
    slider.scrollLeft = scrollLeft - distanciaRecorrida
};
const suelta = (e) =>{
    clickPresiona = false;
     console.log("suelta");
    };

slider.addEventListener("mousedown", presiona);
slider.addEventListener("mousemove", mueve);
slider.addEventListener("mouseup", suelta);