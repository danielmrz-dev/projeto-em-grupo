export class FormCadastroComponent {

    constructor() {
        this.render()
    }

    render(): string {
        return `
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
                        <input type="number" id="preco">
                    </div>
                    <div class="form__inputs-container">
                        <label class="form__labels" for="desconto">Desconto:</label>
                        <input type="checkbox" name="" id="desconto">
                    </div>
                    <div class="form__inputs-container">
                        <label class="form__labels" for="quantidade">Quantidade no estoque:</label>
                        <input type="number" id="quantidade">
                    </div>
                    <div class="form__inputs-container">
                        <label class="form__labels" for="validade">Data de validade:</label>
                        <input type="date" name="" id="validade">
                    </div>
                    <button type="submit" class="form__submit-btn">Cadastrar</button>
                </fieldset>
            </form>
        `
    }
}