// =========================================================
// EXERCÍCIO 6 - GALERIA DE IMAGENS
// Utilizando: Arrays, Objetos, Funções, Eventos, querySelector, addEventListener
// =========================================================

// 1. ARRAY DE OBJETOS COM AS IMAGENS
const listaImagens = [
    { id: 1, titulo: "Paisagem Natural", url: "https://picsum.photos/id/10/600/400" },
    { id: 2, titulo: "Vista da Montanha", url: "https://picsum.photos/id/29/600/400" },
    { id: 3, titulo: "Costa e Praia", url: "https://picsum.photos/id/48/600/400" },
    { id: 4, titulo: "Estrada e Horizonte", url: "https://picsum.photos/id/65/600/400" },
    { id: 5, titulo: "Floresta Densa", url: "https://picsum.photos/id/76/600/400" },
    { id: 6, titulo: "Arquitetura Urbana", url: "https://picsum.photos/id/88/600/400" }
];

// 2. SELEÇÃO DE ELEMENTOS COM querySelector
const gridGaleria = document.querySelector("#gridGaleria");
const imagemModal = document.querySelector("#imagemModal");
const tituloImagemModal = document.querySelector("#tituloImagemModal");

// 3. FUNÇÃO PARA CARREGAR AS IMAGENS NA PÁGINA (DOM)
function carregarGaleria() {
    gridGaleria.innerHTML = "";

    listaImagens.forEach(function(imagem) {
        const coluna = document.createElement("div");
        coluna.className = "col-md-4 col-sm-6";

        coluna.innerHTML = `
            <div class="card shadow-sm h-100 overflow-hidden">
                <img src="${imagem.url}" alt="${imagem.titulo}" class="card-img-top card-img-galeria" data-bs-toggle="modal" data-bs-target="#modalGaleria">
                <div class="card-body text-center p-2">
                    <h6 class="card-title fw-bold text-muted mb-0">${imagem.titulo}</h6>
                </div>
            </div>
        `;

        // 4. EVENTO PARA QUANDO CLICAR NA IMAGEM
        const imgElemento = coluna.querySelector("img");
        imgElemento.addEventListener("click", function() {
            imagemModal.src = imagem.url;
            imagemModal.alt = imagem.titulo;
            tituloImagemModal.textContent = imagem.titulo;
        });

        gridGaleria.appendChild(coluna);
    });
}

// Inicia o carregamento
carregarGaleria();