"use client";

import Link from "next/link";
import { useState } from "react";

const categorias = [
  "Todos",
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
    slug: "vestido-serena",
    nome: "Vestido Serena",
    categoria: "Vestidos",
    preco: "R$ 189,90",
    imagem:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "blusa-amelie",
    nome: "Blusa Amélie",
    categoria: "Blusas",
    preco: "R$ 119,90",
    imagem:
      "https://images.unsplash.com/photo-1564257577054-8c1a9e3c0f3f?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "conunto-muse",
    nome: "Conjunto Muse",
    categoria: "Conjuntos",
    preco: "R$ 229,90",
    imagem:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "saia-charlotte",
    nome: "Saia Charlotte",
    categoria: "Saias",
    preco: "R$ 149,90",
    imagem:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Vestido Aurora",
    categoria: "Vestidos",
    preco: "R$ 219,90",
    imagem:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Calça Luna",
    categoria: "Calças",
    preco: "R$ 179,90",
    imagem:
      "https://images.unsplash.com/photo-1506629905607-d9c297d3e6a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Shorts Paris",
    categoria: "Shorts",
    preco: "R$ 99,90",
    imagem:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Scarpin Muse",
    categoria: "Calçados",
    preco: "R$ 249,90",
    imagem:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaAtiva
        );

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <a href="/" className="logo">
          MUSE
        </a>

        <a href="/" className="catalog-back">
          ← Voltar para a loja
        </a>
      </header>

      <section className="catalog-hero">
        <span className="eyebrow">MUSE SHOP</span>

        <h1>
          Nossa
          <br />
          coleção.
        </h1>

        <p>
          Descubra peças escolhidas para revelar
          sua essência em cada detalhe.
        </p>
      </section>

      <section className="catalog">
        <div className="catalog-top">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>Todos os produtos</h2>
          </div>

          <span className="product-count">
            {produtosFiltrados.length} produtos
          </span>
        </div>

        <div className="category-filters">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={
                categoriaAtiva === categoria ? "active" : ""
              }
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {produtosFiltrados.map((produto) => (
            <article
              className="catalog-product"
              key={produto.nome}
            >
              <div
                className="catalog-product-image"
                style={{
                  backgroundImage: `url(${produto.imagem})`,
                }}
              >
                <span className="product-tag">
                  NOVO
                </span>

                <button
                  className="favorite-button"
                  aria-label={`Favoritar ${produto.nome}`}
                >
                  ♡
                </button>

                <button className="quick-buy">
                  Ver produto
                </button>
              </div>

              <div className="product-info">
  <small>{produto.categoria}</small>

  <h3>{produto.nome}</h3>

  <strong>{produto.preco}</strong>

  <Link
    href={`/produtos/${produto.slug}`}
    className="outline-button"
  >
    Ver produto
  </Link>
</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}