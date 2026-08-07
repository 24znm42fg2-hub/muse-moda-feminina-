const categorias = [
  {
    nome: "Vestidos",
    imagem:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Blusas",
    imagem:
      "https://images.unsplash.com/photo-1564257577054-8c1a9e3c0f3f?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Calças",
    imagem:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Conjuntos",
    imagem:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Saias",
    imagem:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Shorts",
    imagem:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Calçados",
    imagem:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Maquiagens",
    imagem:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
];

const produtos = [
  {
    nome: "Vestido Serena",
    categoria: "Vestidos",
    preco: "R$ 189,90",
    imagem:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Blusa Amélie",
    categoria: "Blusas",
    preco: "R$ 119,90",
    imagem:
      "https://images.unsplash.com/photo-1564257577054-8c1a9e3c0f3f?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Conjunto Muse",
    categoria: "Conjuntos",
    preco: "R$ 229,90",
    imagem:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Saia Charlotte",
    categoria: "Saias",
    preco: "R$ 149,90",
    imagem:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85",
  },
];

import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* HEADER */}

      <header className="site-header">
        <a href="#" className="logo">
          MUSE
        </a>

        <nav className="main-nav">
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

      {/* HERO */}

      <section className="hero">
        <div className="hero-image" />

        <div className="hero-content">
          <span className="eyebrow">COLEÇÃO MUSE</span>

          <h1>
            Vista sua
            <br />
            essência.
          </h1>

          <p>
            Moda feminina pensada para mulheres que valorizam
            elegância, delicadeza e autenticidade.
          </p>

          <div className="hero-actions">
            <Link href="/produtos" className="primary-button">
  Comprar agora
</Link>

            <a href="#categorias" className="text-button">
              Explorar categorias →
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}

      <section className="categories" id="categorias">
        <div className="section-heading">
          <span className="eyebrow">EXPLORE</span>

          <h2>Encontre seu estilo</h2>

          <p>
            Descubra peças escolhidas para acompanhar
            cada momento da sua vida.
          </p>
        </div>

        <div className="category-grid">
          {categorias.map((categoria) => (
            <a
              href="#destaques"
              className="category-card"
              key={categoria.nome}
            >
              <div
                className="category-image"
                style={{
                  backgroundImage: `url(${categoria.imagem})`,
                }}
              />

              <div className="category-overlay">
                <h3>{categoria.nome}</h3>
                <span>Explorar →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}

      <section className="products" id="destaques">
        <div className="section-heading product-heading">
          <div>
            <span className="eyebrow">SELEÇÃO MUSE</span>
            <h2>Peças em destaque</h2>
          </div>

          <a href="#" className="text-button">
            Ver todos →
          </a>
        </div>

        <div className="product-grid">
          {produtos.map((produto) => (
            <article className="product-card" key={produto.nome}>
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${produto.imagem})`,
                }}
              >
                <span className="product-tag">NOVO</span>

                <button
                  className="favorite-button"
                  aria-label={`Favoritar ${produto.nome}`}
                >
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
          <Link href="/produtos" className="outline-button">
  Ver todos os produtos
</Link>
        </div>
      </section>

      {/* COLEÇÃO */}

      <section className="collection" id="novidades">
        <div className="collection-image" />

        <div className="collection-content">
          <span className="eyebrow">NOVA COLEÇÃO</span>

          <h2>
            Elegância que
            <br />
            fala por você.
          </h2>

          <p>
            Descubra as novidades da Muse e encontre
            peças para cada momento.
          </p>

          <a href="#destaques" className="primary-button">
            Conhecer coleção
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="newsletter">
        <span className="eyebrow">MUSE JOURNAL</span>

        <h2>Receba novidades da Muse</h2>

        <p>
          Cadastre seu e-mail e fique por dentro das
          novas coleções, lançamentos e novidades.
        </p>

        <form>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
          />

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">MUSE</div>

          <p>
            Moda feminina para mulheres
            <br />
            que têm essência.
          </p>
        </div>

        <div className="footer-column">
          <h4>Comprar</h4>

          <a href="#novidades">Novidades</a>
          <a href="#categorias">Vestidos</a>
          <a href="#categorias">Conjuntos</a>
          <a href="#categorias">Calçados</a>
        </div>

        <div className="footer-column">
          <h4>Atendimento</h4>

          <a href="#">Fale conosco</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Entrega</a>
          <a href="#">Dúvidas frequentes</a>
        </div>

        <div className="footer-column">
          <h4>Muse</h4>

          <a href="#">Sobre nós</a>
          <a
            href="https://www.instagram.com/muse__modafeminina/"
            target="_blank"
          >
            Instagram
          </a>
          <a href="#">Política de privacidade</a>
        </div>
      </footer>
    </main>
  );
}