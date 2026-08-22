/*
    ARRAY DE OBJETOS

    Cada objeto representa uma pergunta.
*/
const perguntas = [

    {
        pergunta: "O que significa HTML?",

        respostas: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Tool Multi Language",
            "Home Tool Markup Language"
        ],

        // A resposta correta é a posição 0
        correta: 0
    },

    {
        pergunta: "Qual linguagem é usada para estilizar páginas?",

        respostas: [
            "HTML",
            "CSS",
            "Java",
            "SQL"
        ],

        correta: 1
    },


    {
        pergunta: "Qual linguagem é usada para programação no navegador?",

        respostas: [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
        ],

        correta: 0
    },


    {
        pergunta: "Qual comando mostra algo no console do JavaScript?",

        respostas: [
            "print()",
            "console.log()",
            "write()",
            "show()"
        ],

        correta: 1
    },


    {
        pergunta: "Qual propriedade CSS muda a cor do texto?",

        respostas: [
            "background",
            "font",
            "color",
            "text"
        ],

        correta: 2
    }

];


// Número da pergunta atual
let indice = 0;

// Quantidade de acertos
let pontos = 0;


// Função que mostra a pergunta
function carregarPergunta() {

    // Pega a pergunta atual
    const pergunta = perguntas[indice];


    // Coloca o texto da pergunta no HTML
    document.getElementById("pergunta")
        .textContent = pergunta.pergunta;


    // Pega a área das respostas
    const respostas =
        document.getElementById("respostas");


    // Limpa respostas anteriores
    respostas.innerHTML = "";


    // Percorre todas as respostas
    pergunta.respostas.forEach(
        (resposta, index) => {

            // Cria um botão
            const botao =
                document.createElement("button");


            // Coloca o texto da resposta
            botao.textContent = resposta;


            // Adiciona a classe CSS
            botao.classList.add("resposta");


            // Quando clicar
            botao.onclick = function() {

                selecionarResposta(index);

            };


            // Coloca o botão na página
            respostas.appendChild(botao);
        }
    );
}


// Verifica a resposta
function selecionarResposta(index) {

    // Compara a resposta escolhida
    // com a resposta correta
    if (index === perguntas[indice].correta) {

        // Se estiver certa, aumenta 1 ponto
        pontos++;
    }


    // Desativa todos os botões
    document.querySelectorAll(".resposta")
        .forEach(botao => {

            botao.disabled = true;

        });
}


// Vai para a próxima pergunta
function proximaPergunta() {

    // Aumenta o índice
    indice++;


    // Ainda existem perguntas?
    if (indice < perguntas.length) {

        // Mostra a próxima
        carregarPergunta();

    } else {

        // Não existem mais
        finalizarQuiz();
    }
}


// Finaliza o quiz
function finalizarQuiz() {

    // Troca a pergunta
    document.getElementById("pergunta")
        .textContent =
        "Quiz finalizado!";


    // Remove as respostas
    document.getElementById("respostas")
        .innerHTML = "";


    // Esconde o botão
    document.getElementById("proximo")
        .style.display = "none";


    // Mostra a pontuação
    document.getElementById("resultado")
        .textContent =
        `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
}


// Começa mostrando a primeira pergunta
carregarPergunta();