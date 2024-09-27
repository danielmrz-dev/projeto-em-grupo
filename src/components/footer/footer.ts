export class FooterComponent {
	constructor() {
		this.render();
	}

	render(): string {
		return `
        <footer>
          <div class="footer-container">
              
              <div class="about-us">
                <h4> 
                  <img src="https://img.freepik.com/vetores-gratis/logotipo-do-supermercado_23-2148448613.jpg?w=740&t=st=1727317194~exp=1727317794~hmac=065c6d517b703cc09c9d5cbaf688740da9534c7841526f03996cf3494fc1c767" alt="imagem com Logo/Nome mercado" style="width: 100px; height: auto;">
                </h4>  
                <p>super@mercado.com</p>
                <p>(11) 3030-3030</p>
              </div>



              <div class="links-navbar">
                  <h4>Navegação</h4>
                  <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Sobre</a>
                      </li>
                      <li>
                        <a href="#">Produtos</a>
                      </li>
                      <li>
                        <a href="#">Contato</a>
                      </li>
                  </ul>
              </div>

              
              
              <div class="newsletter">
                  <h4>Cadastre-se</h4>
                  <p>Receba promoções por whatsapp</p>
                  <form>
                    <input type="text" placeholder="Digite seu número">
                    <button type="submit" class="btn-submit">Enviar</button>
                  </form> 
              </div>

          </div>

          <div class="footer-copyright">
              <p>&copy; 2024 Nome do Mercado. Todos os direitos reservados.</p>
          </div>
        
        </footer>        
        `;
	}
}
