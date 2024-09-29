export class CardComponent {

    render(nome: string, preco: number): string {
        return `
            <li class="card__product">
                <img src="/src/assets/card-images/carne-picada-em-cubos.jpg" alt="Pedaços de carne vermelha picada em cubos médios">
                
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