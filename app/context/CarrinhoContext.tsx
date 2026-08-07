"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type ItemCarrinho = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  tamanho: string;
  quantidade: number;
};

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  adicionarItem: (item: ItemCarrinho) => void;
  aumentarQuantidade: (id: number, tamanho: string) => void;
  diminuirQuantidade: (id: number, tamanho: string) => void;
  removerItem: (id: number, tamanho: string) => void;
  limparCarrinho: () => void;
  quantidadeTotal: number;
  subtotal: number;
};

const CarrinhoContext =
  createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  useEffect(() => {
    const salvos = localStorage.getItem("muse-carrinho");

    if (salvos) {
      setItens(JSON.parse(salvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "muse-carrinho",
      JSON.stringify(itens)
    );
  }, [itens]);

  function adicionarItem(item: ItemCarrinho) {
    setItens((itensAtuais) => {
      const existente = itensAtuais.find(
        (produto) =>
          produto.id === item.id &&
          produto.tamanho === item.tamanho
      );

      if (existente) {
        return itensAtuais.map((produto) =>
          produto.id === item.id &&
          produto.tamanho === item.tamanho
            ? {
                ...produto,
                quantidade:
                  produto.quantidade + item.quantidade,
              }
            : produto
        );
      }

      return [...itensAtuais, item];
    });
  }

  function aumentarQuantidade(
    id: number,
    tamanho: string
  ) {
    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id &&
        item.tamanho === tamanho
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      )
    );
  }

  function diminuirQuantidade(
    id: number,
    tamanho: string
  ) {
    setItens((itensAtuais) =>
      itensAtuais
        .map((item) =>
          item.id === id &&
          item.tamanho === tamanho
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerItem(
    id: number,
    tamanho: string
  ) {
    setItens((itensAtuais) =>
      itensAtuais.filter(
        (item) =>
          !(
            item.id === id &&
            item.tamanho === tamanho
          )
      )
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const subtotal = itens.reduce(
    (total, item) =>
      total + item.preco * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        aumentarQuantidade,
        diminuirQuantidade,
        removerItem,
        limparCarrinho,
        quantidadeTotal,
        subtotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);

  if (!context) {
    throw new Error(
      "useCarrinho deve ser usado dentro de CarrinhoProvider"
    );
  }

  return context;
}