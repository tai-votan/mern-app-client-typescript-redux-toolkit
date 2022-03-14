import Link from "next/link";
import { NextLinkProps } from "@/interfaces";

export function NextLink(props: NextLinkProps) {
  const { href, children, className, title } = props;
  return (
    <Link href={href} passHref>
      <a className={className} title={title}>
        {children}
      </a>
    </Link>
  );
}
