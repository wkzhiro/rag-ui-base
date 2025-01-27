import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // 先ほど作成したSessionProvider用コンポーネント

const inter = Inter({ subsets: ["latin"] });

// メタデータ等（省略可）
export const metadata = {
  title: "My App",
  description: "NextAuth + Azure AD + Next.js 13 App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* グローバルにSessionProviderを適用 */}
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}