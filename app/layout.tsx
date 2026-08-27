import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Randrianarisona | Développeur Informatique",
  description: "Portfolio professionnel d'Aaron Randrianarisona, développeur informatique spécialisé en architecture logicielle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
