import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({weight: ['100', '300', '400', '700', '900'] , subsets: ["latin"] });

export const metadata = {
  title: "Jointure",
  description: "Conecta y colabora con otras marcas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}