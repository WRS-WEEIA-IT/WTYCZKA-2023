const SectionContent = ({
  selectedSection,
  children,
}: {
  selectedSection: number;
  children: React.ReactNode;
}) => {
  return (
    <section className="overflow-x-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${selectedSection * 100}%)` }}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContent;
