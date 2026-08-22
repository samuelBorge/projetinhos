// Função responsável por atualizar o relógio
function atualizarRelogio() {

    // Cria um objeto Date
    // Ele pega a data e hora atual do computador
    const agora = new Date();


    // Pega somente a hora
    let horas = agora.getHours();

    // Pega somente os minutos
    let minutos = agora.getMinutes();

    // Pega somente os segundos
    let segundos = agora.getSeconds();


    /*
        String() transforma o número em texto.

        padStart(2, "0") garante dois números.

        Exemplo:
        5 vira "05"
    */

    horas = String(horas).padStart(2, "0");

    minutos = String(minutos).padStart(2, "0");

    segundos = String(segundos).padStart(2, "0");


    // Mostra a hora na página
    document.getElementById("hora")
        .textContent =
        `${horas}:${minutos}:${segundos}`;
}


// Executa imediatamente
atualizarRelogio();


// Executa a função novamente a cada 1000 milissegundos
// 1000 ms = 1 segundo
setInterval(atualizarRelogio, 1000);