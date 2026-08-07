"use client";

import Link from "next/link";
import { useCarrinho } from "@/app/context/CarrinhoContext";

export default function CarrinhoPage() {

  const {
    itens,
    aumentarQuantidade,
    diminuirQuantidade,
    removerItem,
    subtotal,
  } = useCarrinho();

  return (
    <main className="carrinho-page">

      <header className="carrinho-header">

        <Link href="/" className="carrinho-logo">
          MUSE
        </Link>

        <span>SUA SACOLA</span>

      </header>

      <section className="carrinho-container">

        <div className="carrinho-topo">

          <div>

            <span className="eyebrow">
              MUSE SHOP
            </span>

            <h1>Sua sacola</h1>

          </div>

          <span className="carrinho-contagem">

            {itens.length} produto{itens.length !== 1 ? "s" : ""}

          </span>

        </div>

        {itens.length === 0 ? (

          <div className="carrinho-vazio">

            <span>♡</span>

            <h2>Sua sacola está vazia</h2>

            <p>
              Encontre sua próxima peça favorita na coleção Muse.
            </p>

            <Link
              href="/produtos"
              className="carrinho-continuar"
            >
              Explorar produtos
            </Link>

          </div>

        ) : (

          <div className="carrinho-layout">

            <div className="carrinho-itens">

              {itens.map((item) => (

                <article
                  className="carrinho-item"
                  key={`${item.id}-${item.tamanho}`}
                >

                  <div className="carrinho-item-imagem">
                    MUSE
                  </div>

                  <div className="carrinho-item-info">

                    <span>{item.categoria}</span>

                    <h2>{item.nome}</h2>

                    <p>
                      Tamanho: <strong>{item.tamanho}</strong>
                    </p>

                    <strong className="carrinho-preco">
                      R$ {item.preco.toFixed(2).replace(".", ",")}
                    </strong>

                    <div className="carrinho-controles">

                      <div className="quantidade">

                        <button
                          onClick={() =>
                            diminuirQuantidade(item.id, item.tamanho)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantidade}</span>

                        <button
                          onClick={() =>
                            aumentarQuantidade(item.id, item.tamanho)
                          }
                        >
                          +
                        </button>

                      </div>

                      <button
                        className="remover-item"
                        onClick={() =>
                          removerItem(item.id, item.tamanho)
                        }
                      >
                        Remover
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

            <aside className="resumo-compra">

              <h2>Resumo da compra</h2>

              <div className="resumo-linha">

                <span>Subtotal</span>

                <strong>
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </strong>

              </div>

              <div className="resumo-linha">

                <span>Entrega</span>

                <span>A calcular</span>

              </div>

              <div className="resumo-divisor"></div>

              <div className="resumo-total">

                <span>Total</span>

                <strong>
                  R$ {subtotal.toFixed(2).replace(".", ",")}
                </strong>

              </div>

              <button className="finalizar-compra">
                Finalizar compra
              </button>

              <Link
                href="/produtos"
                className="continuar-comprando"
              >
                ← Continuar comprando
              </Link>

              <p className="seguranca">
                Pagamento seguro • Pix e cartão
              </p>

            </aside>

          </div>

        )}

      </section>

    </main>
  );

}