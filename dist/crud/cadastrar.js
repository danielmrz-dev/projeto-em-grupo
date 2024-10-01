import { body, produtosParseados, renderizaTudo } from "../main.js";
import { produtos } from "../produtos.js";
export class CadastrarProduto {
    static cadastrarProduto() {
        const btnCadastrar = document.querySelector(".btn-cadastrar");
        const cadastrarModal = document.querySelector(".form-cadastro");
        const btnAdicionaNovoProduto = document.querySelector(".form__submit-btn");
        const btnCancelar = document.querySelector(".form__cancelar");
        const inputNome = document.querySelector("#nome");
        const inputSelect = document.querySelector("#setor");
        const inputPreco = document.querySelector("#preco");
        btnCadastrar.addEventListener("click", () => {
            cadastrarModal.showModal();
        });
        btnCancelar.addEventListener("click", () => {
            cadastrarModal.close();
        });
        btnAdicionaNovoProduto.addEventListener("click", () => {
            if (inputNome.value === "" || inputPreco.value === "" || isNaN(Number(inputPreco.value))) {
                alert("Por favor, preencha os dados do novo produto corretamente!");
                return;
            }
            const novoProduto = {
                id: produtos.length + 1,
                nome: inputNome.value,
                setor: inputSelect.value,
                preco: Number(inputPreco.value),
                imagem: "src/assets/card-images/newProduct.png"
            };
            produtosParseados.push(novoProduto);
            body.innerHTML = "";
            localStorage.setItem("produtos", JSON.stringify(produtosParseados));
            renderizaTudo(produtosParseados);
            cadastrarModal.close();
        });
    }
}
