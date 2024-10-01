import { body, produtosParseados, renderizaTudo } from "../main.js";
export class ExcluirProduto {
    static excluirProduto() {
        const btnsExcluir = document.querySelectorAll(".card__excluir");
        const modalExcluir = document.querySelector(".excluir");
        const btnCancelar = modalExcluir.querySelector(".excluir__cancelar");
        const btnConfirmaExcluir = modalExcluir.querySelector(".excluir__submit-btn");
        let idDrodutoClicado = null;
        let produtoASerExcluido;
        btnsExcluir.forEach((btn) => {
            btn.addEventListener("click", () => {
                var _a;
                modalExcluir.showModal();
                idDrodutoClicado = Number((_a = btn.closest(".card__product")) === null || _a === void 0 ? void 0 : _a.id);
                produtoASerExcluido = produtosParseados.find((produto) => produto.id === idDrodutoClicado);
            });
        });
        btnCancelar.addEventListener("click", () => {
            modalExcluir.close();
        });
        btnConfirmaExcluir.addEventListener("click", () => {
            const produtoExcluidoId = produtosParseados.findIndex(produto => produto.id === idDrodutoClicado);
            if (produtoExcluidoId !== -1) {
                produtosParseados.splice(produtoExcluidoId, 1);
            }
            body.innerHTML = "";
            localStorage.setItem("produtos", JSON.stringify(produtosParseados));
            renderizaTudo(produtosParseados);
            modalExcluir.close();
        });
    }
}
