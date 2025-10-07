import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Labo Expresso",
  description: "Labo Expresso - Journal de bord d'un développeur perfusé au café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
