// worker.js

let countdownTime = 128 * 3600; // 128 horas em segundos

// Função para formatar o tempo
function formatTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: remainingSeconds
    };
}

// Função de contagem regressiva
function countdown() {
    if (countdownTime >= 0) {
        // Envia a contagem formatada para o script principal
        postMessage(formatTime(countdownTime));
        countdownTime--; // Decrementa o contador
    } else {
        clearInterval(countdown); // Para a contagem quando chegar a zero
    }
}

// Inicia a contagem a cada segundo
setInterval(countdown, 1000);
