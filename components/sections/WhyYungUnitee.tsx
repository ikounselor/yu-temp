const pillars = [
  {
    number: "01",
    title: "360-degree ecosystem",
    description:
      "Academic, professional and international opportunities in one place.",
  },
  {
    number: "02",
    title: "Multiple pathways",
    description:
      "Several learning and development routes to suit different goals.",
  },
  {
    number: "03",
    title: "Individuals & institutions",
    description:
      "Solutions for learners and for the organisations around them.",
  },
  {
    number: "04",
    title: "Academic & professional exposure",
    description:
      "Learning that connects study with real-world environments.",
  },
  {
    number: "05",
    title: "International outlook",
    description:
      "Global opportunities and perspectives built in.",
  },
  {
    number: "06",
    title: "Powered by iKounselor",
    description:
      "Backed by an established education network and experience.",
  },
];

export default function WhyYungUnitee() {
  return (
    <section className="bg-light py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-[92%] max-w-290">

        <div className="mb-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
            Why YungUnitee?
          </p>

          <h2 className="hero_heading leading-tight tracking-tight">
            One ecosystem, many pathways.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-primary-200 bg-primary-200 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-light p-7 transition-colors duration-300 hover:bg-bgmild sm:p-8"
            >
              <span className="mb-3 block text-xs font-bold tracking-[0.12em] text-primary-dark">
                {pillar.number}
              </span>

              <h3 className="card_title mb-2">
                {pillar.title}
              </h3>

              <p className="para1 leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
