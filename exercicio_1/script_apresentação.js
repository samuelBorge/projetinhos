// =========================================
// PEGAR OS ELEMENTOS DA PÁGINA
// =========================================

const profileTrigger =
    document.getElementById("profileTrigger");

const modal =
    document.getElementById("photoModal");

const closeBtn =
    document.getElementById("closeBtn");


// =========================================
// ABRIR A FOTO AO CLICAR
// =========================================

profileTrigger.addEventListener("click", () => {

    modal.classList.add("active");

});


// =========================================
// FECHAR AO CLICAR NO FUNDO
// OU NO BOTÃO X
// =========================================

modal.addEventListener("click", (e) => {

    if (
        e.target === modal ||
        e.target === closeBtn
    ) {

        modal.classList.remove("active");

    }

});


// =========================================
// FECHAR PRESSIONANDO ESC
// =========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("active");

    }

});