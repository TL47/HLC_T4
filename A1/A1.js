function añadirNota() {
    // Le aplico la clase oculto a 'Todavía no hay notas'
    document.getElementById('hojita').classList.add('oculto');
    // Creo la constante textarea qeu es igual a el id escribriNota que es mi textarea del html
    const textarea = document.getElementById('escribirNota');
    // Creo la constante div que me crea un nuevo elemento (div)
    const div = document.createElement('div');
    // El contenido el div es igual a al valor del textarea (la nota)
    div.textContent = textarea.value;
    // Le aplico al div la clase noNota
    div.classList.add('noNota');
    // El id noNota (que es el idv vacio en el que se guardan las notas) inserta antes el div no notas, es decir, la nota que hemos escrito en el textarea
    document.getElementById('noNota').insertBefore(div, document.getElementById('noNota').firstChild);
    textarea.value = '';
    // Al boton botonEliminarTodas se le aplica la clase de oculto
    botonEliminarTodas.classList.remove('oculto')
}

// Creo el boton
const botonEliminarTodas = document.createElement('button');
// Le añado la clase de 'oculto'
botonEliminarTodas.classList.add('oculto');
// Le añado la clae de 'eliminarTodas'
botonEliminarTodas.classList.add('eliminarTodas');
// Muesto el texto 'Borrar todas las notas'
botonEliminarTodas.textContent = 'Borrar todas las notas';
// Cuando de click se ejecutara la funcion eliminarTodasNotas
botonEliminarTodas.addEventListener('click', eliminarTodasNotas);
document.body.appendChild(botonEliminarTodas);

function eliminarTodasNotas() {
    // Creo la constante fueraNotas y le digo que use el div noNota
    const fueraNotas = document.getElementById('noNota');
    // Mientras qeu fueraNotas exista...
    while (fueraNotas.firstChild) {
        // Elimina todas las notas creadas cuando se pulse el boton
        fueraNotas.removeChild(fueraNotas.firstChild);
    }
    // Una vez que elimine las notas se le añade la clase oculto
    botonEliminarTodas.classList.add('oculto');
    // Y se muestra de nuevo el mensaje de 'Todavía no hay notas'
    document.getElementById('hojita').classList.remove('oculto');
}