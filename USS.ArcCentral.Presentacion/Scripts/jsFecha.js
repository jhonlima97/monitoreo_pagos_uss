function mostrar() {
    // Ha pasado un segundo
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        min++;
        if (minutos == 60) {
            minutos = 0;
            hora++;
            hor++;
            if (hora == 24) {
                hora = 0;
            }
        }
    }

    if ((hora >= 0) && (hora <= 9)) {
        hora = '0' + hor;
        if (hora == 0)
            hora = '00';
    }

    if ((minutos >= 0) && (minutos <= 9)) {
        minutos = '0' + min;
    }

    if ((segundos >= 0) && (segundos <= 9)) {
        segundos = '0' + segundos;
    }

    if (hora > 12) {
        mt = 'PM';
    }

    //document.frm.hora.value =" " + hora
    document.getElementById('Reloj').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + hora
    + ':' + minutos + ':' + segundos + ' ' + mt;

    window.setTimeout('mostrar()', 1000);
}

function mostrarfecha() {
    document.getElementById('DivFecha').innerHTML = ' ' + fechaActual;
}