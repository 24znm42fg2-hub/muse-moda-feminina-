"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Produto } from "@/lib/produtos";
import { useCarrinho } from "@/app/context/CarrinhoContext";
import "./produto.css";

type Props = {
  produto: Produto;
};

export default function ProdutoClient({ produto }: Props) {
  const router = useRouter();
  const { adicionarItem } = useCarrinho();

  const [imagemAtual, setImagemAtual] = useState(0);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [favorito, setFavorito] = useState(false);

  const toqueInicial = useRef(0);

  function adicionarSacola() {
    if (!tamanhoSelecionado) {
      alert("Selecione um tamanho.");
      return;
    }

    adicionarItem({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      preco: produto.preco,
      tamanho: tamanhoSelecionado,
      quantidade,
    });

    router.push("/carrinho");
  }

  return (
    <main className="produto-page">
      <div className="produto-container">

        <div className="produto-galeria">
          <div className="produto-miniaturas">
            {produto.imagens.map((imagem, index) => (
              <button
                key={index}
                className={imagemAtual === index ? "miniatura-ativa" : ""}
                onClick={() => setImagemAtual(index)}
              >
                <img
                  src={imagem}
                  alt={`${produto.nome} ${index + 1}`}
                />
              </button>
            ))}
          </div>

          <div className="produto-imagem-wrapper">
            <div
  className="produto-imagem-stage"
  onTouchStart={(e) => {
    toqueInicial.current = e.touches[0].clientX;
  }}
  onTouchEnd={(e) => {
    const toqueFinal = e.changedTouches[0].clientX;
    const distancia = toqueInicial.current - toqueFinal;

    if (Math.abs(distancia) < 50) return;

    if (distancia > 0) {
      setImagemAtual((atual) =>
        atual === produto.imagens.length - 1
          ? 0
          : atual + 1
      );
    } else {
      setImagemAtual((atual) =>
        atual === 0
          ? produto.imagens.length - 1
          : atual - 1
      );
    }
  }}
>
  {produto.imagens.map((imagem, index) => (
    <img
      key={`${imagem}-${imagemAtual === index}`}
      src={imagem}
      alt={`${produto.nome} ${index + 1}`}
      className={`produto-imagem-slide ${
        imagemAtual === index ? "ativa" : ""
      }`}
    />
  ))}
  
</div>
          </div>
        </div>

        <div className="produto-info">

          <span className="produto-categoria">
            {produto.categoria}
          </span>

          <h1>{produto.nome}</h1>

          <strong className="produto-preco">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </strong>

          <p className="produto-descricao">
            {produto.descricao}
          </p>

          <div className="produto-opcao">
            <div className="produto-opcao-titulo">
              <span>Tamanho</span>
              <a href="#">Guia de medidas</a>
            </div>

            <div className="tamanhos">
              {produto.tamanhos.map((tamanho) => (
                <button
                  key={tamanho}
                  className={
                    tamanhoSelecionado === tamanho
                      ? "selecionado"
                      : ""
                  }
                  onClick={() =>
                    setTamanhoSelecionado(tamanho)
                  }
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>

          <div className="produto-opcao">
            <span className="produto-opcao-titulo">
              Quantidade
            </span>

            <div className="quantidade">
              <button
                onClick={() =>
                  setQuantidade(Math.max(1, quantidade - 1))
                }
              >
                −
              </button>

              <span>{quantidade}</span>

              <button
                onClick={() => setQuantidade(quantidade + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="adicionar-sacola"
            onClick={adicionarSacola}
          >
            Adicionar à sacola
          </button>

          <button
            className={`favoritar-produto ${
              favorito ? "favoritado" : ""
            }`}
            onClick={() => setFavorito(!favorito)}
          >
            {favorito ? "♥" : "♡"}{" "}
            {favorito
              ? "Adicionado aos favoritos"
              : "Adicionar aos favoritos"}
          </button>

          <div className="produto-info-extra">
            <div>
              <strong>Entrega</strong>
              <span>Receba em casa</span>
            </div>

            <div>
              <strong>Pagamento</strong>
              <span>Pix ou cartão</span>
            </div>

            <div>
              <strong>Trocas</strong>
              <span>Consulte nossa política</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}