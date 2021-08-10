import Link from 'next/link';
import { useRouter } from 'next/router';

interface NextLink {
  href: string;
  locale: string;
  children: any;
  className: string;
}

export default function NextLink(props: NextLink) {
  const { href, locale, children, className } = props;
  const router = useRouter();
  return (
    <Link href={href} locale={locale || router?.locale}>
      <a className={className}>{children}</a>
    </Link>
  );
}
