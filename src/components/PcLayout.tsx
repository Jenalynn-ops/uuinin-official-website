import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function PcLayout({ children }: LayoutProps) {
  return <div>
    <div>PC端</div>
    {children}

  </div>
}