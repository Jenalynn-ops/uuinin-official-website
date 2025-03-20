import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function MobileLayout({ children }: LayoutProps) {
  return <div>
    <div>移动端</div>
    {children}

  </div>
}