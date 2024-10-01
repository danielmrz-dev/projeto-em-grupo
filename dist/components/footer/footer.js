export class FooterComponent {
    constructor() {
        this.render();
    }
    render() {
        return `
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__contact-info">
                      <img
                          src="../../src/assets/logo-ogani.png"
                          alt="imagem com Logo/Nome mercado"
                          style="width: 100px; height: auto"
                      />
            <p>super@mercado.com</p>
            <p>(11) 3030-3030</p>
          </div>

          <div class="footer__navbar">
            <h4>Navegação</h4>
            <ul class="footer__useful-links">
              <li class="footer__useful-link">
                <a href="#">Home</a>
              </li>
              <li class="footer__useful-link">
                <a href="#">Sobre</a>
              </li>
              <li class="footer__useful-link">
                <a href="#">Produtos</a>
              </li>
              <li class="footer__useful-link">
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>

          <div class="footer__newsletter">
            <h4>Cadastre-se</h4>
            <p>Receba promoções por whatsapp</p>
            <form>
              <input type="text" placeholder="Digite seu número" class="footer__newsletter-phone-input"/>
              <button type="submit" class="footer__newsletter-submit-btn">Enviar</button>
            </form>
          </div>
        </div>

        <div class="footer__copyright">
          <p>
            &copy; 2024 Ogani Supermercados. Todos os direitos reservados.
          </p>
        </div>
      </footer>      
        `;
    }
}
