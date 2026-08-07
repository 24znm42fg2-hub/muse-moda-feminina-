export type Produto = {
  id: number;
  slug: string;
  nome: string;
  categoria: string;
  preco: string;
};

export const produtos: Produto[] = [
  {
    id: 1,
    slug: "vestido-serena",
    nome: "Vestido Serena",
    categoria: "Vestidos",
    preco: "R$ 189,90",
  },
  {
    id: 2,
    slug: "blusa-amelie",
    nome: "Blusa Amélie",
    categoria: "Blusas",
    preco: "R$ 119,90",
  },
  {
    id: 3,
    slug: "conjunto-muse",
    nome: "Conjunto Muse",
    categoria: "Conjuntos",
    preco: "R$ 229,90",
  },
  {
    id: 4,
    slug: "saia-charlotte",
    nome: "Saia Charlotte",
    categoria: "Saias",
    preco: "R$ 149,90",
  },
];