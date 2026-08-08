"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Produto } from "@/lib/produtos";
import { useCarrinho } from "@/app/context/CarrinhoContext";

type Props = {
  produto: Produto;
};

export default function ProdutoClient({ produto }: Props) {
  const router = useRouter();
  const { adicionarItem } = useCarrinho();

  const [imagemAtual, setImagemAtual] = useState(0);
  const [tamanhoSelecionado, setTamanhoSelecionado] =
    useState("");
  const [quantidade, setQuantidade] = useState(1);

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

          <img
            src={produto.imagens[imagemAtual]}
            alt={produto.nome}
            className="produto-imagem-principal"
          />

          <div className="produto-miniaturas">
            {produto.imagens.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={produto.nome}
                onClick={() => setImagemAtual(index)}
              />
            ))}
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

        </div>

      </div>
    </main>
  );
}