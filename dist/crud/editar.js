export class EditarProduto {
    editarProduto() {
        const btnCadastrar = document.querySelector(".header__all-departments-btn");
        const modalEditar = document.querySelector(".editar");
        if (btnCadastrar && modalEditar) {
            btnCadastrar.addEventListener("click", () => {
                modalEditar.showModal();
            });
        }
        else {
            console.error("Elementos não encontrados no DOM.");
        }
    }
}
