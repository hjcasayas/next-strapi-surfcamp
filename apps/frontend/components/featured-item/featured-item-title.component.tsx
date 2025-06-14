interface FeaturedItemTitleProps {
  title: string;
}

export const FeaturedItemTitleComponent = ({
  title,
}: FeaturedItemTitleProps) => {
  return <h5 className="text-3xl font-bold">{title}</h5>;
};
