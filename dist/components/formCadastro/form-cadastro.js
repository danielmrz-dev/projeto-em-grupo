export class FormCadastroComponent {
    constructor() {
        this.render();
    }
    render() {
        return `
            <dialog class="form-cadastro">
                <form class="form">
                    <fieldset class="form__fieldset">
                        <legend class="form__legend">Formulário de cadastro de novos produtos</legend>
                        <div class="form__inputs-container">
                            <label class="form__labels" for="nome">Nome do produto:</label>
                            <input type="text" id="nome">
                        </div>
                        <div class="form__inputs-container">
                            <label class="form__labels" for="setor">Setor:</label>
                            <select name="" id="setor" class="form__select">
                                <option value="Alimentos">Alimentos</option>
                                <option value="Laticínios">Laticínios</option>
                                <option value="Limpeza">Limpeza</option>
                                <option value="Hortifruti">Hortifruti</option>
                                <option value="Higiene">Higiene</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                        <div class="form__inputs-container">
                            <label class="form__labels" for="preco">Preço:</label>
                            <input type="text" id="preco">
                        </div>
                        <div class="form__btns-container">
                            <button class="form__cancelar">Cancelar</button>
                            <button class="form__submit-btn">Cadastrar</button>
                        </div>
                    </fieldset>
                </form>
            </dialog>
        `;
    }
}
