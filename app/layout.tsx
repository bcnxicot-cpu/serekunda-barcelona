import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://serekunda-barcelona.vercel.app"),
  title: "SereKunda — Cocina gambiana en Collblanc",
  description: "Cocina de África Occidental hecha en casa, en Collblanc. Reserva tu mesa en SereKunda.",
  openGraph: {
    title: "SereKunda — Cocina gambiana en Collblanc",
    description: "Hay sabores que no se olvidan. Ven a probarlos.",
    type: "website",
    locale: "es_ES",
    images: [{ url: "https://media.timeout.com/images/105516367/1920/1080/image.webp", width: 1920, height: 1080 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
