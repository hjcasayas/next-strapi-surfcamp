import Link from 'next/link';
import { CtaButton } from '../_gql/landing-page.interface';
import { cn } from '../_utils/cn.util';

export interface CallToActionComponentProps extends CtaButton {
  className?: string;
}

export const CtaButtonComponent = ({
  label,
  url,
  className,
  bgColor,
}: CallToActionComponentProps) => {
  console.log({ bgColor });
  return (
    <Link
      href={url}
      className={cn('text-white', bgColor.replaceAll('_', '-'), className)}
    >
      {label}
    </Link>
  );
};
