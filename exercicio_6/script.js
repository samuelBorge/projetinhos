// Função para abrir o modal
function abrirModal(imagem) {

    // Pega o modal
    const modal =
        document.getElementById("modal");

    // Pega a imagem que ficará grande
    const imagemModal =
        document.getElementById("imagemModal");


    // Copia o endereço da imagem clicada
    imagemModal.src = imagem.src;


    // Mostra o modal
    modal.style.display = "flex";
}


// Função para fechar
function fecharModal() {

    // Esconde o modal
    document.getElementById("modal")
        .style.display = "none";
}