export class ModalEditarComponent {

    constructor() {
        this.render()
    }

    render(): string {
        return `
            <dialog class="editar">
                <div class="editar__container">
                    <h2>Edite as informações do produto</h2>
                    <form class="editar__form">
                        <div class="editar__inputs-container">
                            <label class="editar__labels" for="editar-nome">Nome do produto:</label>
                            <input type="text" id="editar-nome">
                        </div>
                        <div class="editar__inputs-container">
                            <label class="editar__labels" for="editar-setor">Setor:</label>
                            <select name="" id="editar-setor" class="editar__select">
                                <option value="Alimentos">Alimentos</option>
                                <option value="Laticínios">Laticínios</option>
                                <option value="Limpeza">Limpeza</option>
                                <option value="Hortifruti">Hortifruti</option>
                                <option value="Higiene">Higiene</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                        <div class="editar__inputs-container">
                            <label class="editar__labels" for="editar-preco">Preço:</label>
                            <input type="text" id="editar-preco">
                        </div>
                        <div class="editar__btns-container">
                            <button class="editar__cancelar">Cancelar</button>
                            <button class="editar__submit-btn">Atualizar</button>
                        </div>
                    </form>
                </div>
            </dialog>
        `
    }
}