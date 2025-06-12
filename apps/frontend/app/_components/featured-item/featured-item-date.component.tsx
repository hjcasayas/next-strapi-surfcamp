interface FeaturedItemDateProps {
  date: string;
}

export const FeaturedItemDateComponent = ({ date }: FeaturedItemDateProps) => {
  return <span className="inline-block text-[15px]">{date}</span>;
};
