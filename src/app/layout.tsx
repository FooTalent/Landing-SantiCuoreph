import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SantiCuore PH: Fotógrafo y Editor Audiovisual",
  description:
    "SantiCuore PH, ubicado en Buenos Aires, Argentina es fotógrafo y editor profesional. Ofrece servicios de fotografía, edición de video y creación de contenido.",
  keywords: "Fotógrafo, Editor, Editor Audiovisual, Fotografía, Argentina,Buenos aires,Fotografía Comercial,Fotografía artística, Cobertura de evento,Video,redes, redes sociales,la capital,capital de argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
