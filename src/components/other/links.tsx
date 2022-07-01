import Link from "next/link";
import { LinkProps } from "~types/components";

export default function Links({ isOutsite, href, text, className }: LinkProps) {
  if (isOutsite) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer nofollow">
        {text}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={className}>{text}</a>
      </Link>
    );
  }
}
