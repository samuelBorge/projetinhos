// =========================================================
// HUB DE PROJETOS - JAVASCRIPT
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM TODOS OS 10 PROJETOS
const listaProjetos = [
    {
        id: 1,
        pasta: "exercicio_1",
        titulo: "Apresentação Pessoal",
        descricao: "Página de perfil profissional de Samuel Borges com hobbies e modal de foto.",
        categoria: "layout",
        tag: "Perfil & Modal",
        icone: "👨‍💻"
    },
    {
        id: 2,
        pasta: "exercicio_2",
        titulo: "Formulário de Cadastro",
        descricao: "Validação completa de campos, confirmação de senha e alertas visuais.",
        categoria: "formularios",
        tag: "Validações",
        icone: "📝"
    },
    {
        id: 3,
        pasta: "exercicio_3",
        titulo: "Calculadora Interativa",
        descricao: "Calculadora com operações de soma, subtração, multiplicação e divisão com validação de zero.",
        categoria: "dom",
        tag: "Operações",
        icone: "🧮"
    },
    {
        id: 4,
        pasta: "exercicio_4",
        titulo: "Lista de Tarefas (To-Do)",
        descricao: "Adição, conclusão e remoção dinâmica de tarefas da rotina.",
        categoria: "dom",
        tag: "Produtividade",
        icone: "✅"
    },
    {
        id: 5,
        pasta: "exercicio_5",
        titulo: "Página Responsiva",
        descricao: "Layout completo adaptado para desktop, tablet e celular com Bootstrap Grid.",
        categoria: "layout",
        tag: "Responsividade",
        icone: "📱"
    },
    {
        id: 6,
        pasta: "exercicio_6",
        titulo: "Galeria com Modal",
        descricao: "Grade de fotos com visualizador ampliado em tela cheia via Modal.",
        categoria: "layout",
        tag: "Galeria Visual",
        icone: "🖼️"
    },
    {
        id: 7,
        pasta: "exercicio_7",
        titulo: "Relógio Digital",
        descricao: "Mostrador digital de horas, minutos e segundos atualizado a cada segundo.",
        categoria: "dom",
        tag: "Tempo Real",
        icone: "⏱️"
    },
    {
        id: 8,
        pasta: "exercicio_8",
        titulo: "Quiz de Informática",
        descricao: "Perguntas de múltipla escolha com validação instantânea de acertos e erros.",
        categoria: "formularios",
        tag: "Gamificação",
        icone: "🧠"
    },
    {
        id: 9,
        pasta: "exercicio_9",
        titulo: "Consumo de API",
        descricao: "Requisição assíncrona com Fetch API para exibição de usuários em cards.",
        categoria: "api",
        tag: "Async / Fetch",
        icone: "🌐"
    },
    {
        id: 10,
        pasta: "exercicio_10",
        titulo: "Sistema de Gestão de Notas",
        descricao: "Tabela dinâmica de cálculo de médias escolares com status de aprovação.",
        categoria: "formularios",
        tag: "Tabela & Médias",
        icone: "📊"
    }
];

// 2. SELEÇÃO DE ELEMENTOS DO DOM COM querySelector
const gridProjetos = document.querySelector("#gridProjetos");
const campoBusca = document.querySelector("#campoBusca");
const botoesFiltro = document.querySelectorAll(".btn-filtro");

let categoriaAtiva = "todos";
let termoPesquisa = "";

// 3. FUNÇÃO PARA CRIAR E ADICIONAR OS CARDS NO DOM
function renderizarProjetos() {
    gridProjetos.innerHTML = "";

    // Filtra o array de objetos
    const projetosFiltrados = listaProjetos.filter(function(projeto) {
        const correspondeCategoria = (categoriaAtiva === "todos") || (projeto.categoria === categoriaAtiva);
        const correspondeBusca = projeto.titulo.toLowerCase().includes(termoPesquisa) || 
                                 projeto.descricao.toLowerCase().includes(termoPesquisa);
        return correspondeCategoria && correspondeBusca;
    });

    if (projetosFiltrados.length === 0) {
        gridProjetos.innerHTML = `
            <div class="col-12 text-center text-secondary py-5">
                <p class="fs-5">Nenhum projeto encontrado para esta busca.</p>
            </div>
        `;
        return;
    }

    projetosFiltrados.forEach(function(projeto) {
        const coluna = document.createElement("div");
        coluna.className = "col-md-4 col-sm-6";

        coluna.innerHTML = `
            <div class="card h-100 card-dark p-4 d-flex flex-column justify-content-between">
                <div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 px-2 py-1 rounded-pill">
                            Ex #${String(projeto.id).padStart(2, '0')}
                        </span>
                        <span class="badge bg-secondary bg-opacity-25 text-secondary px-2 py-1 rounded-pill">
                            ${projeto.tag}
                        </span>
                    </div>
                    <div class="icone-projeto">${projeto.icone}</div>
                    <h4 class="card-title fw-bold text-white mb-2">${projeto.titulo}</h4>
                    <p class="card-text text-secondary small">${projeto.descricao}</p>
                </div>
                <a href="${projeto.pasta}/index.html" class="btn btn-primary w-100 mt-3 d-flex justify-content-between align-items-center">
                    <span>Abrir Projeto</span>
                    <span>&rarr;</span>
                </a>
            </div>
        `;

        gridProjetos.appendChild(coluna);
    });
}

// 4. EVENTOS (addEventListener)
campoBusca.addEventListener("input", function(e) {
    termoPesquisa = e.target.value.toLowerCase().trim();
    renderizarProjetos();
});

botoesFiltro.forEach(function(btn) {
    btn.addEventListener("click", function() {
        botoesFiltro.forEach(b => {
            b.classList.remove("btn-primary");
            b.classList.add("btn-outline-secondary");
        });
        btn.classList.remove("btn-outline-secondary");
        btn.classList.add("btn-primary");

        categoriaAtiva = btn.getAttribute("data-categoria");
        renderizarProjetos();
    });
});

// Inicialização
renderizarProjetos();
