export const NavigationComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-12 pt-6">
      {children}
    </nav>
  );
};
