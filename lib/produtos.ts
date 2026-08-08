export type Produto = {
  id: number;
  slug: string;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagens: string[];
  tamanhos: string[];
};

export const produtos: Produto[] = [
  {
    id: 1,
    slug: "vestido-serena",
    nome: "Vestido Serena",
    categoria: "Vestidos",
    preco: 189.9,
    descricao:
      "Uma peça elegante e delicada, pensada para valorizar a feminilidade em todos os detalhes.",
    imagens: [
      "/images/produtos/vestido-serena-1.jpg",
      "/images/produtos/vestido-serena-2.jpg",
      "/images/produtos/vestido-serena-3.jpg",
      "/images/produtos/vestido-serena-4.jpg",
    ],
    tamanhos: ["PP", "P", "M", "G", "GG"],
  },

  {
    id: 2,
    slug: "blusa-amelie",
    nome: "Blusa Amélie",
    categoria: "Blusas",
    preco: 119.9,
    descricao:
      "Blusa delicada para qualquer ocasião, confortável e sofisticada.",
    imagens: [
      "/images/produtos/blusa-amelie-1.jpg",
      "/images/produtos/blusa-amelie-2.jpg",
      "/images/produtos/blusa-amelie-3.jpg",
      "/images/produtos/blusa-amelie-4.jpg",
    ],
    tamanhos: ["PP", "P", "M", "G", "GG"],
  },

  {
    id: 3,
    slug: "conjunto-muse",
    nome: "Conjunto Muse",
    categoria: "Conjuntos",
    preco: 229.9,
    descricao:
      "Conjunto exclusivo da coleção Muse, elegante para qualquer ocasião.",
    imagens: [
      "/images/produtos/conjunto-muse-1.jpg",
      "/images/produtos/conjunto-muse-2.jpg",
      "/images/produtos/conjunto-muse-3.jpg",
      "/images/produtos/conjunto-muse-4.jpg",
    ],
    tamanhos: ["PP", "P", "M", "G", "GG"],
  },

  {
    id: 4,
    slug: "saia-charlotte",
    nome: "Saia Charlotte",
    categoria: "Saias",
    preco: 149.9,
    descricao:
      "Elegância e delicadeza para compor looks sofisticados.",
    imagens: [
      "/images/produtos/saia-charlotte-1.jpg",
      "/images/produtos/saia-charlotte-2.jpg",
      "/images/produtos/saia-charlotte-3.jpg",
      "/images/produtos/saia-charlotte-4.jpg",
    ],
    tamanhos: ["PP", "P", "M", "G", "GG"],
  },
];