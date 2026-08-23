// =========================================================
// EXERCÍCIO 1 - SCRIPT DE APRESENTAÇÃO
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM OS HOBBIES
const meusHobbies = [
    { nome: "Jogar", icone: "🎮", descricao: "Jogos de estratégia e aventura" },
    { nome: "Estudar", icone: "📚", descricao: "Programação e tecnologias web" },
    { nome: "Cozinhar", icone: "🍳", descricao: "Novas receitas no dia a dia" }
];

// 2. SELEÇÃO DO ELEMENTO DO DOM COM querySelector
const listaHobbies = document.querySelector("#listaHobbies");

// 3. FUNÇÃO PARA CRIAR E ADICIONAR OS HOBBIES NO DOM
function carregarHobbies() {
    // Percorre o array de objetos
    meusHobbies.forEach(function(hobby) {
        // Cria o elemento <li>
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";
        
        item.innerHTML = `
            <span><strong>${hobby.icone} ${hobby.nome}</strong> - <small class="text-muted">${hobby.descricao}</small></span>
        `;

        // Adiciona à lista
        listaHobbies.appendChild(item);
    });
}

// 4. EVENTOS (addEventListener)
const fotoPerfil = document.querySelector("#fotoPerfil");

fotoPerfil.addEventListener("mouseenter", function() {
    fotoPerfil.style.borderColor = "#4876FF";
});

fotoPerfil.addEventListener("mouseleave", function() {
    fotoPerfil.style.borderColor = "#836FFF";
});

// Executa a função ao carregar a página
carregarHobbies();