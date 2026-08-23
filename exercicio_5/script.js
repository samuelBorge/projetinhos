// =========================================================
// EXERCÍCIO 5 - PÁGINA RESPONSIVA
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM SERVIÇOS
const listaServicos = [
    { titulo: "Desenvolvimento Web", descricao: "Criação de páginas completas e responsivas.", icone: "💻" },
    { titulo: "Design de Interface", descricao: "Aparência moderna com foco no usuário.", icone: "🎨" },
    { titulo: "Manutenção & Otimização", descricao: "Ajustes de velocidade e novas funções.", icone: "⚡" }
];

// 2. SELEÇÃO DE ELEMENTOS COM querySelector
const cardsServicos = document.querySelector("#cardsServicos");
const btnSaibaMais = document.querySelector("#btnSaibaMais");
const alertaInterativo = document.querySelector("#alertaInterativo");

// 3. FUNÇÃO PARA CARREGAR OS CARDS NA GRID (DOM)
function carregarServicos() {
    listaServicos.forEach(function(servico) {
        const coluna = document.createElement("div");
        coluna.className = "col-md-4";

        coluna.innerHTML = `
            <div class="card h-100 shadow-sm text-center p-3">
                <div class="fs-1 mb-2">${servico.icone}</div>
                <h5 class="fw-bold">${servico.titulo}</h5>
                <p class="text-muted small">${servico.descricao}</p>
            </div>
        `;

        cardsServicos.appendChild(coluna);
    });
}

// 4. EVENTO (addEventListener)
btnSaibaMais.addEventListener("click", function() {
    alertaInterativo.classList.remove("d-none");
    alertaInterativo.textContent = "Obrigado pelo interesse! Explore os serviços abaixo.";
});

// Executa ao iniciar
carregarServicos();
