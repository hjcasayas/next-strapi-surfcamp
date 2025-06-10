import { Heading } from '@/app/_gql/page.interface';

export interface HeadlineComponentProps {
  headings: Heading[];
}

export const HeadlineComponent = ({ headings }: HeadlineComponentProps) => {
  return (
    <div className="items-tart z-10 mb-16 flex flex-col justify-center">
      {headings.map((heading) => (
        <h1 className="text-9xl leading-[117.2px]" key={heading.id}>
          {heading.text}
        </h1>
      ))}
    </div>
  );
};
