import ThemeRegistry from "./utils/ThemeRegistry";
import "../app/globals.css";
import theme from "./utils/theme";


export const metadata = {
  title: "Jointure",
  description: "Conecta y colabora con otras marcas",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <body>
          <ThemeRegistry theme={theme}>
              {children}
          </ThemeRegistry>
        </body>
      </html>
    </>
  );
}