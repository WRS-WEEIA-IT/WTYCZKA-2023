const SectionContentElement = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`min-w-full ${className} overflow-y-auto px-10 py-6 flex items-center justify-top flex-col gap-6 xl:justify-center xl:px-32 overflow-x-hidden`}
    >
      {children}
    </div>
  );
};

export default SectionContentElement;
