import Button from "@/components/ui/Button";

const benefits = [
  "Research & academic mentorship opportunities",
  "Student, teacher and staff assessments",
  "International academic exposure",
  "Internship & professional development opportunities",
  "Academic enrichment & expert-led learning",
];

export default function Institutions() {
  return (
    <section
      id="institutions"
      className="section-spacing bg-linear-to-br from-primary-dark to-teal text-light"
    >
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
            For Institutions
          </p>

          <h2 className="hero_heading leading-tight tracking-tight">
            Empowering Institutions. Expanding Possibilities.
          </h2>

          <p className="para1 mt-6 leading-relaxed text-light/95">
            YungUnitee works with schools, colleges and universities,
            not only individual learners.
          </p>

          <div className="mt-8">
            <Button href="#contact" variant="amber">
              PARTNER WITH US
            </Button>
          </div>
        </div>

        <ul className="grid gap-3">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-r-brand border-l-4 border-tertiary bg-light/15 px-5 py-4 text-sm font-semibold leading-relaxed text-light sm:text-base"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
