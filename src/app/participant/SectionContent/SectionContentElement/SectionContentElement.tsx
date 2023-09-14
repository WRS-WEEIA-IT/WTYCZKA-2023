const SectionContentElement = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`min-w-full ${className} overflow-y-auto`}>{children}</div>
  );
};

export default SectionContentElement;
