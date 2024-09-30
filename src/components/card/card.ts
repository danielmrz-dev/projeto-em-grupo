export class CardComponent {

    render(nome: string, preco: number, imagem?: HTMLImageElement): string {
        return `
            <li class="card__product">
                <img src="${imagem}" alt="Imagem do produto ${nome}">
                
                <div class="card__info">
                    <p class="card__title"><a href="#">${nome}</a></p>
                    <p class="card__price"><a href="#">R$ ${preco}</a></p>
                </div>
                <ul class="card__buttons">
                    <li class="card__button">
                        <abbr title="Favoritar">
                            <a href="#">
                                <i class="fa-solid fa-heart"></i>
                            </a>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Exlcuir">
                            <a href="#">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Editar">
                            <a href="#">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </a>
                        </abbr>
                    </li>
                    <li class="card__button">
                        <abbr title="Adicionar ao Carrinho">
                            <a href="#">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </abbr>
                    </li>  
                </ul>
            </li>        
        `
    }
}