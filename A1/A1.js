function hojaEstilos(tema:) {
    let estilo=document.getElementById('estilo')
    switch (tema) {
        case 'claro':
            estilo.setAttribute('href', 'claro.css')
        break;
    }

}