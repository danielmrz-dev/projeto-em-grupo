import { formataMoeda } from "../../utils/formataMoeda.js";

export class CardComponent {

    render(id: number, nome: string, setor: string, preco: number, imagem: string): string {
        return `
            <li class="card__product" id=${id}>
                <img src="${imagem}" alt="${nome}" class="card__product-img">
                
                <div class="card__info">
                    <p class="card__title">
                        ${nome}
                    </p>
                    <p class="card__title">
                        ${setor}
                    </p>
                    <p class="card__price">
                        ${formataMoeda(preco)}
                    </p>
                </div>
                <ul class="card__buttons">
                    <li class="card__button">
                        <abbr title="Favoritar">
                            <button class="card__favoritar">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Exlcuir">
                            <button class="card__excluir">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Editar">
                            <button class="card__editar">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Adicionar ao Carrinho">
                            <button class="card__adicionar">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </abbr>
                    </li>  
                </ul>
            </li>        
        `
    }
}