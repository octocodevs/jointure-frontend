
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./utils/ThemeRegistry";
import theme from "./utils/theme";
import AuthContextProvider from "@/contexts/authContext";
// import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({weight: ['100', '300', '400', '700', '900'] , subsets: ["latin"] });

export const metadata = {
  title: "Jointure",
  description: "Conecta y colabora con otras marcas",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={montserrat.className}>
        <AuthContextProvider>
          <ThemeRegistry theme={theme}>
              {children}
          </ThemeRegistry>
        </AuthContextProvider>
        </body>
      </html>
    </>
  );
}