import { ReactNode } from "react";

export interface NextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title: string;
}
