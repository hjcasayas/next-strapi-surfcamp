import { CtaButton } from '@/interfaces/cta-button.interface';
import { cn } from '@/utils/cn.util';
import Link from 'next/link';

export interface CallToActionComponentProps extends CtaButton {
  className?: string;
}

export const CtaButtonComponent = ({
  label,
  url,
  className,
  bgColor,
}: CallToActionComponentProps) => {
  const bgColorMap: Record<string, string> = {
    bg_turquoise: 'bg-turquoise',
    bg_black: 'bg-black',
    bg_orange: 'bg-orange',
    bg_brown: 'bg-brown',
  };

  return (
    <Link
      href={url}
      className={cn(
        'rounded-full font-bold text-white',
        bgColorMap[bgColor],
        className
      )}
    >
      {label}
    </Link>
  );
};
