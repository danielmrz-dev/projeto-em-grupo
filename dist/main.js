import { CardContainerComponent } from "./components/card-container/card-container.js";
import { FooterComponent } from "./components/footer/footer.js";
import { FormCadastroComponent } from "./components/formCadastro/form-cadastro.js";
import { HeaderComponent } from "./components/header/header.js";
import { ModalEditarComponent } from "./components/modal-editar/modal-editar.js";
import { ModalExcluirComponent } from "./components/modal-excluir/modal-excluir.js";
import { CadastrarProduto } from "./crud/cadastrar.js";
import { EditarProduto } from "./crud/editar.js";
import { ExcluirProduto } from "./crud/excluir.js";
import { produtos } from "./produtos.js";
export const body = document.querySelector("body");
const elementoHeader = new HeaderComponent();
export const elementoMain = new CardContainerComponent();
const elementoFooter = new FooterComponent();
const elementoModalEditar = new ModalEditarComponent();
const elementoModalExcluir = new ModalExcluirComponent();
const elementoFormularioDeCadastro = new FormCadastroComponent();
const produtosArmazenados = localStorage.getItem("produtos");
export const produtosParseados = produtosArmazenados ? JSON.parse(produtosArmazenados) : produtos;
export function renderizaTudo(produtos) {
    if (body) {
        body.innerHTML += elementoHeader.render();
        body.innerHTML += elementoMain.render(produtos);
        body.innerHTML += elementoFooter.render();
        body.innerHTML += elementoModalExcluir.render();
        body.innerHTML += elementoModalEditar.render();
        body.innerHTML += elementoFormularioDeCadastro.render();
        EditarProduto.editarProduto();
        ExcluirProduto.excluirProduto();
        CadastrarProduto.cadastrarProduto();
    }
}
renderizaTudo(produtosParseados);
