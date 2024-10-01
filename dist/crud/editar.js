import { body, produtosParseados, renderizaTudo } from "../main.js";
export class EditarProduto {
    static editarProduto() {
        const btnsEditar = document.querySelectorAll(".card__editar");
        const modalEditar = document.querySelector(".editar");
        const inputNome = modalEditar.querySelector("#editar-nome");
        const inputSelector = modalEditar.querySelector("#editar-setor");
        const inputPreco = modalEditar.querySelector("#editar-preco");
        const closeModalBtn = modalEditar.querySelector(".editar__cancelar");
        const confirmaEdicaoBtn = modalEditar.querySelector(".editar__submit-btn");
        let idDrodutoClicado = null;
        let produtoASerEditado = null;
        if (btnsEditar && modalEditar) {
            btnsEditar.forEach((btn) => {
                btn.addEventListener("click", () => {
                    var _a;
                    modalEditar.showModal();
                    idDrodutoClicado = Number((_a = btn.closest(".card__product")) === null || _a === void 0 ? void 0 : _a.id);
                    produtoASerEditado = produtosParseados.find(produto => produto.id === idDrodutoClicado);
                    inputNome.value = produtoASerEditado.nome;
                    inputSelector.value = produtoASerEditado.setor;
                    inputPreco.value = (produtoASerEditado.preco).toString();
                });
            });
        }
        confirmaEdicaoBtn.addEventListener("click", () => {
            const novoProduto = produtosParseados.find(produto => produto.id === produtoASerEditado.id);
            novoProduto.nome = inputNome.value;
            novoProduto.preco = Number(inputPreco.value);
            novoProduto.setor = inputSelector.value;
            body.innerHTML = '';
            localStorage.setItem("produtos", JSON.stringify(produtosParseados));
            renderizaTudo(produtosParseados);
            modalEditar.close();
        });
        closeModalBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modalEditar.close();
        });
    }
}
