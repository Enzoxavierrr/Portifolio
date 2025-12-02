import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

