import { IProduto } from "../interfaces/produto.interface.js";
import { body, produtosParseados, renderizaTudo } from "../main.js";
import { produtos } from "../produtos.js";

export class ExcluirProduto {
    static excluirProduto(): void {
        const btnsExcluir = document.querySelectorAll(".card__excluir") as NodeListOf<HTMLButtonElement>;
		const modalExcluir = document.querySelector(".excluir") as HTMLDialogElement;

        const btnCancelar = modalExcluir.querySelector(".excluir__cancelar") as HTMLButtonElement;
        const btnConfirmaExcluir = modalExcluir.querySelector(".excluir__submit-btn") as HTMLButtonElement;

        let idDrodutoClicado: number | null = null
        let produtoASerExcluido: IProduto | undefined;

        btnsExcluir.forEach((btn) => {
            btn.addEventListener("click", () => {
                modalExcluir.showModal()
                idDrodutoClicado = Number(btn.closest(".card__product")?.id)
                produtoASerExcluido = produtosParseados.find((produto) => produto.id === idDrodutoClicado)
            })
        })

        btnCancelar.addEventListener("click", () => {
            modalExcluir.close()
        })

        btnConfirmaExcluir.addEventListener("click", () => {
            const produtoExcluidoId = produtosParseados.findIndex(produto => produto.id === idDrodutoClicado)

            if (produtoExcluidoId !== -1) {
                produtosParseados.splice(produtoExcluidoId, 1)
            }

			body!.innerHTML = ""
            localStorage.setItem("produtos", JSON.stringify(produtosParseados))
            renderizaTudo(produtosParseados)
			modalExcluir.close()
        })
	}
}
