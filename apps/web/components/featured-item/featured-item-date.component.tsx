import { format } from 'date-fns';

interface FeaturedItemDateProps {
  date: string;
}

export const FeaturedItemDateComponent = ({ date }: FeaturedItemDateProps) => {
  return (
    <span className="inline-block text-[15px]">
      {format(new Date(date), 'EEEE, LLLL dd, yyyy')}
    </span>
  );
};
