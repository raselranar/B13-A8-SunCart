const SectionComponent = ({ topTitle, title, description, children }) => {
  return (
    <section className="bg-background">
      <div className="container mx-auto py-10 px-4">
        <div className="">
          {/* heading */}
          <div className="flex flex-col items-center gap-3 mb-8 *:text-center">
            <p className="text-sm text-accent uppercase tracking-widest">
              {topTitle}
            </p>
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold">
              {title}
            </h2>
            <p className="text-gray-500">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
export default SectionComponent;
