import '../../tailwind.config';
import "./globals.css";
import ThemeRegistry from "./utils/ThemeRegistry";
import theme from "./utils/theme";

export const metadata = {
  title: "Jointure",
  description: "Conecta y colabora con otras marcas",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeRegistry theme={theme}>
              {children}
          </ThemeRegistry>
        </body>
      </html>
    </>
  );
}