import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "shina | AIで業務改善をサポート",
  description: "AIを活用して、現場で本当に使える仕組みをつくります。個人事業主の業務改善をAIでサポートするポートフォリオサイトです。",
  keywords: ["AI活用", "業務改善", "個人事業主", "AIエージェント", "業務自動化"],
  openGraph: {
    title: "shina | AIで業務改善をサポート",
    description: "AIを活用して、現場で本当に使える仕組みをつくります。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
