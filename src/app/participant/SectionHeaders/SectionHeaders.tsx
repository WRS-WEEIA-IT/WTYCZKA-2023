import { headersEN, headersPL } from "./headers";

const SectionHeaders = ({
  selectedSection,
  setSelectedSection,
}: {
  selectedSection: number;
  setSelectedSection: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <section className="scrollable flex items-center gap-8 text-md overflow-auto px-8 lg:justify-center lg:text-lg">
      {headersPL.map((header, index) => (
        <span
          key={index}
          className={`hover:text-secondary-color cursor-pointer block py-4 whitespace-nowrap ${
            index === selectedSection ? "text-active-color" : "text-white"
          }`}
          onClick={() => setSelectedSection(index)}
        >
          {header}
        </span>
      ))}
    </section>
  );
};

export default SectionHeaders;