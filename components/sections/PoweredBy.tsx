import Button from "@/components/ui/Button";

const capabilities = [
  "Education Discovery & Guidance",
  "Study Abroad & International Educations",
  "Admissions Support",
  "Education Financing",
  "Global Academic Networks & Partnerships",
];

export default function PoweredBy() {
  return (
    <section className="section-spacing bg-secondary text-center text-light">
      <div className="mx-auto w-[92%] max-w-290">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Powered by iKounselor
        </p>

        <h2 className="hero_heading leading-tight tracking-tight">
          Built on experience, Connected to global opportunities
        </h2>

        <p className="para1 mx-auto my-6 max-w-[40em] leading-relaxed text-light/80">
YungUnitee is powered by iKounselor, bringing together over 25 years of experience in the education sector, established international networks across 18+ countries, and expertise in education discovery, study abroad, admissions and education financing. Together, we make academic opportunities, international education pathways and global learning experiences more accessible.
        </p>

        <ul className="mb-8 flex flex-wrap justify-center gap-2">
          {capabilities.map((item) => (
            <li
              key={item}
              className="rounded-full border border-light/25 px-4 py-2 text-xs font-semibold sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <Button href="#home" variant="primary">
          EXPLORE YUNGUNITEE
        </Button>

      </div>
    </section>
  );
}
