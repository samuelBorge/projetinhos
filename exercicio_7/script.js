// =========================================================
// EXERCÍCIO 7 - RELÓGIO DIGITAL
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. SELEÇÃO DE ELEMENTOS DO DOM COM querySelector
const horaElemento = document.querySelector("#hora");
const dataElemento = document.querySelector("#dataAtual");
const btnSaudacao = document.querySelector("#btnSaudacao");
const alertaSaudacao = document.querySelector("#alertaSaudacao");

// 2. ARRAY COM OS NOMES DOS DIAS DA SEMANA
const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", 
    "Quinta-feira", "Sexta-feira", "Sábado"
];

// 3. FUNÇÃO PARA ATUALIZAR O RELÓGIO (DOM e Date)
function atualizarRelogio() {
    const agora = new Date();

    // Cria um OBJETO com as informações de tempo
    const infoTempo = {
        horas: String(agora.getHours()).padStart(2, "0"),
        minutos: String(agora.getMinutes()).padStart(2, "0"),
        segundos: String(agora.getSeconds()).padStart(2, "0"),
        diaSemana: diasSemana[agora.getDay()],
        data: agora.toLocaleDateString("pt-BR")
    };

    // Atualiza o texto na tela
    horaElemento.textContent = `${infoTempo.horas}:${infoTempo.minutos}:${infoTempo.segundos}`;
    dataElemento.textContent = `${infoTempo.diaSemana}, ${infoTempo.data}`;
}

// 4. FUNÇÃO PARA EXIBIR MENSAGEM DE SAUDAÇÃO
function mostrarSaudacao() {
    const horaAtual = new Date().getHours();
    let mensagem = "";

    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = "Bom dia! Tenha um ótimo dia de estudos e trabalho! ☀️";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = "Boa tarde! Continue focado nos seus projetos! 🌤️";
    } else {
        mensagem = "Boa noite! Hora de relaxar ou revisar os códigos! 🌙";
    }

    alertaSaudacao.classList.remove("d-none");
    alertaSaudacao.textContent = mensagem;
}

// 5. EVENTOS (addEventListener)
btnSaudacao.addEventListener("click", mostrarSaudacao);

// Inicia imediatamente e atualiza a cada 1 segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);