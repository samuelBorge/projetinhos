// =========================================================
// EXERCÍCIO 9 - CONSUMO DE API
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. SELEÇÃO DE ELEMENTOS DO DOM COM querySelector
const usuariosGrid = document.querySelector("#usuariosGrid");
const mensagemStatus = document.querySelector("#mensagemStatus");
const btnRecarregar = document.querySelector("#btnRecarregar");

// 2. ARRAY PARA ARMAZENAR OS USUÁRIOS
let listaUsuarios = [];

// 3. FUNÇÃO ASSÍNCRONA PARA CARREGAR OS DADOS DA API
async function carregarUsuarios() {
    mensagemStatus.className = "alert alert-info text-center d-block";
    mensagemStatus.textContent = "Buscando dados da API...";
    usuariosGrid.innerHTML = "";

    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        // Converte a resposta em um ARRAY DE OBJETOS
        listaUsuarios = await resposta.json();

        // Esconde a mensagem de carregamento
        mensagemStatus.className = "alert d-none";

        // Chama a função para manipular o DOM
        exibirUsuarios();

    } catch (erro) {
        mensagemStatus.className = "alert alert-danger text-center d-block";
        mensagemStatus.textContent = "Não foi possível carregar os usuários. Verifique sua conexão.";
        console.error(erro);
    }
}

// 4. FUNÇÃO PARA CRIAR E ADICIONAR OS CARDS NO DOM
function exibirUsuarios() {
    usuariosGrid.innerHTML = "";

    listaUsuarios.forEach(function(usuario) {
        const coluna = document.createElement("div");
        coluna.className = "col-md-4 col-sm-6";

        coluna.innerHTML = `
            <div class="card shadow-sm h-100 card-usuario">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-custom">${usuario.name}</h5>
                    <p class="card-text mb-1">
                        <strong>E-mail:</strong> ${usuario.email}
                    </p>
                    <p class="card-text mb-1">
                        <strong>Cidade:</strong> ${usuario.address.city}
                    </p>
                    <p class="card-text text-muted small">
                        <strong>Empresa:</strong> ${usuario.company.name}
                    </p>
                </div>
            </div>
        `;

        usuariosGrid.appendChild(coluna);
    });
}

// 5. EVENTOS (addEventListener)
btnRecarregar.addEventListener("click", carregarUsuarios);

// Inicia a requisição ao carregar a página
carregarUsuarios();