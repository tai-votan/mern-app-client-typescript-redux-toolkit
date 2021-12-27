import Link from 'next/link';
import { useRouter } from 'next/router';

import { NextLinkProps } from '@/interfaces';

export function NextLink(props: NextLinkProps) {
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
