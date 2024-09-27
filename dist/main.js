import { FooterComponent } from "./components/footer/footer.js";
import { FormCadastroComponent } from "./components/formCadastro/form-cadastro.js";
import { HeaderComponent } from "./components/header/header.js";
// Captura o elemento body para inserir os componentes criados nele
const body = document.querySelector("body");
// Cria uma instância do elemento criado com a classe para inserir no body
const formularioDeCadastro = new FormCadastroComponent();
const header = new HeaderComponent();
const footer = new FooterComponent();
// Insere os elementos dentro do body
if (body) {
    body.innerHTML += header.render();
    body.innerHTML += footer.render();
}
