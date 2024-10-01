import { IProduto } from "../../interfaces/produto.interface.js"
import { CardComponent } from "../card/card.js"

export class CardContainerComponent {

    render(produtos: any[]): string {

        const cardComponent = new CardComponent()
        const cards = produtos.map((produto: IProduto) => cardComponent.render(produto.id, produto.nome, produto.setor, produto.preco, produto.imagem))

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
                        ${cards.join("")}
                    </ul>            
                </section>
            </main>
        `
    }
}