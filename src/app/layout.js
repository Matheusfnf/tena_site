import "./globals.css";

export const metadata = {
  title: "Tena Soluções Sustentáveis | Bioinsumos On-Farm para Agricultura Sustentável",
  description:
    "Bioinsumos on-farm para agricultura sustentável. Tenha sua própria biofábrica na fazenda com suporte técnico especializado. Autonomia, produtividade e sustentabilidade.",
  keywords:
    "bioinsumos, biofábrica on-farm, agricultura sustentável, produção on-farm, bioinsumos na fazenda, Tena",
  openGraph: {
    title: "Tena Soluções Sustentáveis | Bioinsumos On-Farm",
    description:
      "Bioinsumos on-farm para agricultura sustentável. Tenha sua própria biofábrica na fazenda.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
