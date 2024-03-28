import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import "../app/globals.css";

const montserrat = Montserrat({weight: ['100', '300', '400', '700', '900'] , subsets: ["latin"] });

export const metadata = {
  title: "Jointure",
  description: "Conecta y colabora con otras marcas",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <main className={montserrat.className}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
          </ThemeProvider>
        </main>
      </html>
    </>
  );
}