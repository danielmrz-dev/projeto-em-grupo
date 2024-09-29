export class CardComponent {
    render(nome, preco) {
        return `
            <main>
                <section class="section__featured-products">

                    <div class="section__featured-products-container">                        
                        <div class="section__title">                            
                            <h2>Produtos em Destaque</h2>
                        </div>                        
                        <div class="section__categories">                            
                            <ul class="section__links">
                                <li class="section__link">
                                    <a href="#">Todos</a>
                                </li>
                                <li class="section__link">
                                    <a href="#">Laranjas</a>
                                </li>
                                <li class="section__link">
                                    <a href="#">Carne Fresca</a>
                                </li>
                                <li class="section__link">
                                    <a href="#">Vegetais</a>
                                </li>
                                <li class="section__link">
                                    <a href="#">Fast Food</a>
                                </li>
                            </ul>
                        </div>                            
                    </div>
            
                    <ul class="card">
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
                    </ul>            
                </section>
            </main>
        `;
    }
}
