import Link from 'next/link';
import { CtaButton } from '../_gql/landing-page.interface';
import { cn } from '../_utils/cn.util';

export interface CallToActionComponentProps extends CtaButton {
  className?: string;
}

export const CtaButtonComponent = ({
  label,
  bgColor,
  url,
  className,
}: CallToActionComponentProps) => {
  let backgroundColor = 'bg-turquoise';
  if (bgColor === 'black') {
    backgroundColor = 'bg-black';
  }
  if (bgColor === 'orange') {
    backgroundColor = 'bg-orange';
  }

  return (
    <Link href={url} className={cn(backgroundColor, 'text-white', className)}>
      {label}
    </Link>
  );
};
