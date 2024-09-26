import { FormCadastroComponent } from "./components/formCadastro/form-cadastro.js";
// Captura o elemento body para inserir os componentes criados nele
const body = document.querySelector("body");
// Cria uma instância do elemento criado com a classe para inserir no body
const formularioDeCadastro = new FormCadastroComponent();
// Insere os elementos dentro do body
if (body) {
    body.innerHTML += formularioDeCadastro.render();
}
