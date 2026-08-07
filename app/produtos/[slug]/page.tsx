"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCarrinho } from "@/app/context/CarrinhoContext";

const produto = {
  nome: "Vestido Serena",
  categoria: "Vestidos",
  preco: 189.9,
  descricao:
    "Uma peça elegante e delicada, pensada para valorizar a feminilidade em todos os detalhes.",
  tamanhos: ["PP", "P", "M", "G", "GG"],
};

export default function ProdutoPage() {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState(1);
const router = useRouter();

const { adicionarItem } = useCarrinho();

function adicionarSacola() {
  if (!tamanhoSelecionado) {
    alert("Selecione um tamanho.");
    return;
  }

  adicionarItem({
    id: 1,
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
        <div className="produto-foto">
          <div className="produto-placeholder">
            MUSE
          </div>
        </div>

        <div className="produto-detalhes">
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
                    tamanhoSelecionado === tamanho ? "selecionado" : ""
                  }
                  onClick={() => setTamanhoSelecionado(tamanho)}
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

          <button className="favoritar-produto">
            ♡ Adicionar aos favoritos
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