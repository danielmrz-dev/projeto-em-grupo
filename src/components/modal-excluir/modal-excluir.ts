export class ModalExcluirComponent {
	constructor() {
		this.render();
	}

	render(): string {
		return `
            <dialog class="excluir">
                <div class="excluir__container">
                    <h2>Tem certeza que deseja excluir este produto?</h2>
                        <div class="excluir__btns-container">
                            <button class="excluir__cancelar">Cancelar</button>
                            <button class="excluir__submit-btn">Excluir</button>
                        </div>
                    </form>
                </div>
            </dialog>
        `;
	}
}
