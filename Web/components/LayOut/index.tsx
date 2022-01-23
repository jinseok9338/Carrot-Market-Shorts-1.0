import { ReactNode } from "react";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="container">{children}</div>;
}

export default Layout;
