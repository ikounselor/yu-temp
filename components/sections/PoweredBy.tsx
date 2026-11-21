import Button from "@/components/ui/Button";

const capabilities = [
  "Education discovery",
  "Admissions",
  "Financing",
  "International networks",
];

export default function PoweredBy() {
  return (
    <section className="bg-secondary py-20 text-center text-light sm:py-24 lg:py-28">
      <div className="mx-auto w-[92%] max-w-290">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
          Powered by iKounselor
        </p>

        <h2 className="hero_heading leading-tight tracking-tight">
          Experience from the education sector.
        </h2>

        <p className="para1 mx-auto my-6 max-w-[40em] leading-relaxed text-light/80">
          iKounselor powers YungUnitee, bringing its experience in the
          education sector, its established international networks and
          its work across education discovery, admissions and financing.
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
