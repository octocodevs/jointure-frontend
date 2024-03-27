import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "../theme";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Jointure</title>
      </Head>
      <html lang="es">
        <body className={montserrat.className}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}