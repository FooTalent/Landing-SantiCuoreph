import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SantiCuore PH: Fotografía y Edición Audiovisual en Argentina",
  description: "SantiCuore PH es un servicio especializado en fotografía, edición de video y creación de contenido audiovisual para redes sociales. Realizamos retratos, fotografía artística, fotografía comercial y publicitaria. También realizamos cobertura de eventos artísticos, eventos sociales y eventos corporativos, cumpleaños, casamientos, y más. Producciones fotográficas y audiovisuales de calidad. Contactanos hoy mismo y solicita tu presupuesto sin compromiso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
