import { Headline } from '../_interfaces/header.interface';
import { cn } from '../_utils/cn.util';

export interface HeadlineComponentProps {
  headlines: Headline[];
}

export const HeadlinesComponent = ({ headlines }: HeadlineComponentProps) => {
  const colorClassNameMap: Record<string, string> = {
    text_white: 'text-white',
    text_black: 'text-black',
  };

  return (
    <div className="items-tart z-10 mb-16 flex flex-col justify-center">
      {headlines.map((headline) => (
        <h1
          className={cn(
            'text-9xl leading-[117.2px]',
            colorClassNameMap[headline.colorClassName]
          )}
          key={headline.id}
        >
          {headline.text}
        </h1>
      ))}
    </div>
  );
};
