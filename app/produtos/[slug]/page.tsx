import { notFound } from "next/navigation";
import { produtos } from "@/lib/produtos";
import ProdutoClient from "./ProdutoClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProdutoPage({
  params,
}: Props) {
  const { slug } = await params;

  const produto = produtos.find(
    (p) => p.slug === slug
  );

  if (!produto) {
    notFound();
  }

  return <ProdutoClient produto={produto} />;
}