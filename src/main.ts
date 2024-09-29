
import { CardContainerComponent } from "./components/card-container/card-container.js";
import { FooterComponent } from "./components/footer/footer.js";
import { FormCadastroComponent } from "./components/formCadastro/form-cadastro.js";
import { HeaderComponent } from "./components/header/header.js";
import { ModalEditarComponent } from "./components/modal-editar/modal-editar.js";
import { EditarProduto } from "./crud/editar.js";
import { produtos } from "./produtos.js";

// Captura o elemento body para inserir os componentes criados nele
const body = document.querySelector("body");

// Cria uma instância do elemento criado com a classe para inserir no body
const elementoHeader = new HeaderComponent();
const elementoMain = new CardContainerComponent()
const elementoFooter = new FooterComponent();
const elementoModalEditar = new ModalEditarComponent();
const crudEditar = new EditarProduto();
const elementoFormularioDeCadastro = new FormCadastroComponent();

// Insere os elementos dentro do body
if (body) {
	body.innerHTML += elementoHeader.render();
	body.innerHTML += elementoMain.render(produtos);	
	body.innerHTML += elementoFooter.render();
	body.innerHTML += elementoModalEditar.render();
}

crudEditar.editarProduto();
