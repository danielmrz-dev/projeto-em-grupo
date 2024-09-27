export class HeaderComponent {

    constructor() {
        this.render()
    }

    render(): string {
        return `
            <header class="header">
                <div class="header__container">
                    <img src="../../src/assets/logo ogani.png" alt="Logo" class="header__logo">
                    <nav class="header__navbar">
                        <ul class="header__navbar-list">
                            <li class="header__navbar-item">
                                <a href="#">INÍCIO</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="#">COMPRAR</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="#">PÁGINAS</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="#">BLOG</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="#">CONTATO</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__favs-and-cart">
                        <span>❤ 1</span>
                        <span>🛒 3</span>
                        <span>$150.00</span>
                    </div>

                </div>
                <div class="header__searchbar-container">
                    <button class="header__all-departments-btn">Departamentos</button>

                    <div class="header__input-container">
                        <input type="text" placeholder="O que você precisa?">
                        <button class="header__search-btn">BUSCAR</button>
                    </div>

                    <div class="header__contact-info">
                        <div class="header__contact-info-phone">
                            <span>📞 +65 (11) 99999-8888</span>
                            <span>Atendimento 24h</span>
                        </div>
                    </div>
                </div>
            </header>
        `
    }
}