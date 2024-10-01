import { IProduto } from "../interfaces/produto.interface";
import { body, produtosParseados, renderizaTudo } from "../main.js";
import { produtos } from "../produtos.js";

export class CadastrarProduto {

	static cadastrarProduto(): void {
        const btnCadastrar = document.querySelector(".btn-cadastrar") as HTMLAnchorElement;
        const cadastrarModal = document.querySelector(".form-cadastro") as HTMLDialogElement;
        const btnAdicionaNovoProduto = document.querySelector(".form__submit-btn") as HTMLButtonElement;
        const btnCancelar = document.querySelector(".form__cancelar") as HTMLButtonElement;

        const inputNome = document.querySelector("#nome") as HTMLInputElement;
        const inputSelect = document.querySelector("#setor") as HTMLSelectElement;
        const inputPreco = document.querySelector("#preco") as HTMLInputElement;

        btnCadastrar.addEventListener("click", () => {
            cadastrarModal.showModal();
        })

        btnCancelar.addEventListener("click", () => {
            cadastrarModal.close();
        })

        btnAdicionaNovoProduto.addEventListener("click", () => {

            if (inputNome.value === "" || inputPreco.value === "" || isNaN(Number(inputPreco.value))) {
                alert("Por favor, preencha os dados do novo produto corretamente!");
                return;
            }

            const novoProduto: IProduto = {
                id: produtos.length + 1,
                nome: inputNome.value,
                setor: inputSelect.value,
                preco: Number(inputPreco.value),
                imagem: "src/assets/card-images/newProduct.png"
            }

            produtosParseados.push(novoProduto);
            body!.innerHTML = ""
            localStorage.setItem("produtos", JSON.stringify(produtosParseados))
            renderizaTudo(produtosParseados)
            cadastrarModal.close()
        })


    }
}