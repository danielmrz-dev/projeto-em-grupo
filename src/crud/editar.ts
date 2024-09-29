export class EditarProduto {
	editarProduto(): void {
		const btnCadastrar = document.querySelector(
			".header__all-departments-btn"
		) as HTMLButtonElement;
		const modalEditar = document.querySelector(
			".editar"
		) as HTMLDialogElement;

		if (btnCadastrar && modalEditar) {
			btnCadastrar.addEventListener("click", () => {
				modalEditar.showModal();
			});
		} else {
			console.error("Elementos não encontrados no DOM.");
		}
	}
}
