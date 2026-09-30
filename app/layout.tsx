import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soaresclimatizacao.com.br"),
  title: {
    default: "Soares Climatização | Ar-condicionado em Bombinhas e região",
    template: "%s | Soares Climatização",
  },
  description: "Instalação, infraestrutura, manutenção e higienização de ar-condicionado em Bombinhas e região. Solicite seu orçamento pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Soares Climatização",
    description: "Instalação, infraestrutura, manutenção e higienização de ar-condicionado em Bombinhas e região.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
