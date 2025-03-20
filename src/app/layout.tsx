
export default function RootLayout({ children }: { children: React.ReactNode }) {
  

  return (
    <html lang="zh">
      <body>
        <nav>
          <a href="/">首页</a> | <a href="/about">关于</a>
        </nav>
        {children}
      </body>
    </html>
  );
}