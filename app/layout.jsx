import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enzo Xavier - Portfólio",
  description: "Portfólio de Enzo Xavier - Desenvolvedor Full Stack",
  icons: {
    icon: "/icon-1-svg.svg",
    shortcut: "/icon-1-svg.svg",
    apple: "/icon-1-svg.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

