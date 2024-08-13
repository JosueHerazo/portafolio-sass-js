

const animarTexto = (elemento) => {
    const numeroLetras = elemento.dataset.texto.length;
    // Activamos el cursor cuando comienza la animacion.
    const cursor = elemento.querySelector(".hero__cursor");
    cursor.classList.add("hero__cursor--visible");
    // Por cada letra, la agregamos al DOM con 100ms de separacion
    for(let i = 0; i < numeroLetras; i++){
        setTimeout(() => 
            {
            const letra = document.createElement("span")
            letra.append(elemento.dataset.texto[i])
            elemento.append(letra)
        }, 100 * i)
        
    }
    // cambiamos la clase del cursor cuando termine la animacion de letras
    setTimeout(() => {
        // obtenemos los cursores 
        const cursores = [...elemento.closest(".hero__header").querySelectorAll(".hero__cursor")]
        // obtenemos el index del cursor actual
        const indexCursorActual = cursores.indexOf(cursor)
        // comprobamos que el cursor no sea el ultimo
        if(indexCursorActual < cursores.length - 1){
            // si no es el ultimo, ocultamos el cursor
            cursor.classList.remove("hero__cursor--visible")
        }else{
            // si es el ultimo, le ponemos la clase de active 
            cursor.classList.add("hero__cursor--active")
          
        }
    }, numeroLetras * 100)
    // Retornamos una promesa para saber cuando la animacion acabe
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 100))



}

export default animarTexto;