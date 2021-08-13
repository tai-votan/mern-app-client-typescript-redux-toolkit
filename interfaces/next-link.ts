import { ReactNode } from 'react';

export interface NextLinkProps {
  href: string;
  locale?: string;
  children: ReactNode;
  className?: string;
  title: string;
}
