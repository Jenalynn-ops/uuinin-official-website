import PcLayout from "@/components/PcLayout";
import MobileLayout from "@/components/MobileLayout";
import { headers } from "next/headers";
export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  let isMobile = /Mobile|Android|iP(hone|od|ad)/.test(userAgent);

  return (
    <html lang="zh">
      <body>
        {/* <nav>
          <a href="/">首页</a> | <a href="/about">关于</a>
        </nav>
        {children} */}
        {isMobile ? <MobileLayout>{children}</MobileLayout> : <PcLayout>{children}</PcLayout>}
      </body>
    </html>
  );
}