import { Heading } from '@/app/_gql/landing-page.interface';

export interface HeadlineComponentProps {
  headlines: Heading[];
}

export const HeadlineComponent = ({ headlines }: HeadlineComponentProps) => {
  return (
    <div className="items-tart mb-16 flex flex-col justify-center">
      {headlines.map((heading) => (
        <h1 className="text-9xl leading-[117.2px]" key={heading.id}>
          {heading.text}
        </h1>
      ))}
    </div>
  );
};
