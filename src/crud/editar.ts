import { body, produtosParseados, renderizaTudo } from "../main.js";
import { produtos } from "../produtos.js";

export class EditarProduto {
	static editarProduto(): void {
		const btnsEditar = document.querySelectorAll(".card__editar") as NodeListOf<HTMLButtonElement>;
		const modalEditar = document.querySelector(".editar") as HTMLDialogElement;

		const inputNome = modalEditar.querySelector("#editar-nome") as HTMLInputElement;
		const inputSelector = modalEditar.querySelector("#editar-setor") as HTMLSelectElement;
		const inputPreco = modalEditar.querySelector("#editar-preco") as HTMLInputElement;
		const closeModalBtn = modalEditar.querySelector(".editar__cancelar") as HTMLButtonElement;
		const confirmaEdicaoBtn = modalEditar.querySelector(".editar__submit-btn") as HTMLButtonElement;

		let idDrodutoClicado: number | null = null
		let produtoASerEditado: any = null

		if (btnsEditar && modalEditar) {
			btnsEditar.forEach((btn) => {
				btn.addEventListener("click", () => {
					modalEditar.showModal();
					idDrodutoClicado = Number(btn.closest(".card__product")?.id)
					produtoASerEditado = produtosParseados.find(produto => produto.id === idDrodutoClicado)
					inputNome.value = produtoASerEditado!.nome
					inputSelector.value = produtoASerEditado!.setor
					inputPreco.value = (produtoASerEditado!.preco).toString();
				})
				
			})
		} 

		confirmaEdicaoBtn.addEventListener("click", () => {
			const novoProduto = produtosParseados.find(produto => produto.id === produtoASerEditado.id)
			novoProduto!.nome = inputNome.value;
			novoProduto!.preco = Number(inputPreco.value)
			novoProduto!.setor = inputSelector.value
			body!.innerHTML = ''
			localStorage.setItem("produtos", JSON.stringify(produtosParseados))
			renderizaTudo(produtosParseados)
			modalEditar.close()
		})

		closeModalBtn.addEventListener("click", (e) => {
			e.preventDefault()
			modalEditar.close()
		})		
	}
}
