import type { Metadata } from "next";
import "./globals.css";
import { CarrinhoProvider } from "./context/CarrinhoContext";

export const metadata: Metadata = {
  title: "MUSE | Moda Feminina",
  description:
    "MUSE Moda Feminina — peças escolhidas para revelar sua essência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CarrinhoProvider>
          {children}
        </CarrinhoProvider>
      </body>
    </html>
  );
}