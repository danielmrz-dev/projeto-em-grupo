export class ModalExcluir {

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
                            <input type="number" id="editar-preco">
                        </div>
                        <div class="editar__inputs-container">
                            <label class="editar__labels" for="editar-quantidade">Quantidade no estoque:</label>
                            <input type="number" id="editar-quantidade">
                        </div>
                        <div class="editar__inputs-container">
                            <label class="editar__labels" for="editar-validade">Data de validade:</label>
                            <input type="date" name="" id="editar-validade">
                        </div>
                        <div class="editar__btns-container">
                            <button class="editar__cancelar">Cancelar</button>
                            <button type="submit" class="editar__submit-btn">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </dialog>
        `
    }
}