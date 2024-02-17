let centesimas = 0;
let segundos = 0;
let minutos = 0;
let temporizador;
let temporizadorIniciado = false;

function setTemporizador(tiempoMinutos) {
    minutos = Math.floor(tiempoMinutos);
    segundos = Math.floor((tiempoMinutos - minutos) * 60);
    centesimas = 0;
    actualizarVisualizacion();
}

function iniciarTemporizador() {
    if (!temporizadorIniciado) {
        temporizador = setInterval(actualizarTemporizador, 10);
        temporizadorIniciado = true;
        document.getElementById('btnIniciar').disabled = true;
    }
}

function detenerTemporizador() {
    clearInterval(temporizador);
    temporizadorIniciado = false;
    document.getElementById('btnIniciar').disabled = false;
}

function actualizarTemporizador() {
    centesimas--;
    if (centesimas < 0) {
        centesimas = 99;
        segundos--;
        if (segundos < 0) {
            segundos = 59;
            minutos--;
            if (minutos < 0) {
                detenerTemporizador();
                return;
            }
        }
    }

    actualizarVisualizacion();
}

function actualizarVisualizacion() {
    let tiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.${centesimas.toString().padStart(2, '0')}`;
    document.getElementById('temporizador').textContent = tiempo;
}

window.onload = function() {
    document.getElementById('btnIniciar').disabled = false;
};
