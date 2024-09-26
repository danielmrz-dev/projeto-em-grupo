export class HeaderComponent {
    constructor() {
        this.render();
    }
    render() {
        return `
    <header>
        <div class="container">
            <!-- Linha 1: Menu de navegação -->
            <nav class="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>

            <!-- Linha 2: Logo, Barra de Pesquisa e Carrinho -->
            <div class="search-section">
                <div class="logo">
                    <img src="./assets/logo ogani.png" alt="Logo">
                
                </div>
                <div class="search-bar">
                    <button class="dropdown">All departments</button>
                    <input type="text" placeholder="What do you need?">
                    <button class="search-btn">SEARCH</button>
                </div>
                <div class="cart-info">
                    <div class="cart-icons">
                        <span class="wishlist">❤ 1</span>
                        <span class="cart">🛒 3</span>
                        <span class="total">$150.00</span>
                    </div>
                    <div class="phone">
                        <span>📞 +65 11.188.888</span>
                        <span>support 24/7 time</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
        `;
    }
}
