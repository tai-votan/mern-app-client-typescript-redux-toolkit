import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NextLinkProps {
  href: string;
  locale?: string;
  children: ReactNode;
  className?: string;
  title: string;
}

export default function NextLink(props: NextLinkProps) {
  const { href, locale, children, className, title } = props;
  const router = useRouter();
  return (
    <Link href={href} locale={locale || router?.locale}>
      <a className={className} title={title}>
        {children}
      </a>
    </Link>
  );
}
