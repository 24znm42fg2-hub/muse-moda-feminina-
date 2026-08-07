const categorias = [
  "Vestidos",
  "Blusas",
  "Calças",
  "Conjuntos",
  "Saias",
  "Shorts",
  "Calçados",
  "Maquiagens",
];

const produtos = [
  {
    nome: "Vestido Serena",
    categoria: "Vestidos",
    preco: "R$ 189,90",
  },
  {
    nome: "Blusa Amélie",
    categoria: "Blusas",
    preco: "R$ 119,90",
  },
  {
    nome: "Conjunto Muse",
    categoria: "Conjuntos",
    preco: "R$ 229,90",
  },
  {
    nome: "Saia Charlotte",
    categoria: "Saias",
    preco: "R$ 149,90",
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">MUSE</div>

        <nav>
          <a href="#">Início</a>
          <a href="#categorias">Categorias</a>
          <a href="#destaques">Destaques</a>
          <a href="#novidades">Novidades</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Buscar">⌕</button>
          <button aria-label="Favoritos">♡</button>
          <button aria-label="Carrinho">🛍</button>
          <button className="login-button">Entrar</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span>COLEÇÃO MUSE</span>

          <h1>
            Seu estilo.
            <br />
            Sua essência.
          </h1>

          <p>
            Descubra peças escolhidas para mulheres que
            transformam simplicidade em elegância.
          </p>

          <a href="#destaques" className="hero-button">
            Comprar agora
          </a>
        </div>
      </section>

      <section className="categories" id="categorias">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Encontre seu estilo</h2>
        </div>

        <div className="category-grid">
          {categorias.map((categoria) => (
            <a href="#" className="category-card" key={categoria}>
              <div className="category-image" />
              <h3>{categoria}</h3>
              <span>Explorar →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="products" id="destaques">
        <div className="section-heading">
          <span>SELEÇÃO MUSE</span>
          <h2>Peças em destaque</h2>
        </div>

        <div className="product-grid">
          {produtos.map((produto) => (
            <article className="product-card" key={produto.nome}>
              <div className="product-image">
                <span>NOVO</span>
                <button aria-label={`Favoritar ${produto.nome}`}>
                  ♡
                </button>
              </div>

              <div className="product-info">
                <small>{produto.categoria}</small>
                <h3>{produto.nome}</h3>
                <strong>{produto.preco}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="center">
          <a href="#" className="outline-button">
            Ver todos os produtos
          </a>
        </div>
      </section>

      <section className="collection" id="novidades">
        <div>
          <span>NOVA COLEÇÃO</span>
          <h2>
            Elegância que
            <br />
            fala por você.
          </h2>

          <p>
            Descubra as novidades da Muse e encontre
            peças para cada momento.
          </p>

          <a href="#" className="hero-button">
            Conhecer coleção
          </a>
        </div>
      </section>

      <section className="newsletter">
        <span>MUSE JOURNAL</span>
        <h2>Receba novidades da Muse</h2>
        <p>
          Cadastre seu e-mail e fique por dentro das novas
          coleções e novidades.
        </p>

        <form>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="footer-logo">MUSE</div>
          <p>Moda feminina para mulheres que têm essência.</p>
        </div>

        <div>
          <h4>Comprar</h4>
          <a href="#">Novidades</a>
          <a href="#">Vestidos</a>
          <a href="#">Conjuntos</a>
          <a href="#">Calçados</a>
        </div>

        <div>
          <h4>Atendimento</h4>
          <a href="#">Fale conosco</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Entrega</a>
          <a href="#">Dúvidas frequentes</a>
        </div>

        <div>
          <h4>Muse</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Instagram</a>
          <a href="#">Política de privacidade</a>
        </div>
      </footer>
    </main>
  );
}