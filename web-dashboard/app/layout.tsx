import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "速拧训练 Dashboard",
    description: "三阶魔方速拧训练进度、分段诊断与每日计划。",
    openGraph: {
      title: "速拧训练 Dashboard",
      description: "从 58.04 秒出发，向稳定 Sub-30 前进。",
      images: [{ url: imageUrl, width: 1734, height: 907 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "速拧训练 Dashboard",
      description: "从 58.04 秒出发，向稳定 Sub-30 前进。",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
