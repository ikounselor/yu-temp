import Button from "@/components/ui/Button";
import Image from "next/image";
const orbitItems = [
  "Research",
  "Assessments",
  "USMLE",
  "Internships",
  "Certifications",
  "eBooks",
  "Counselling",
  "Workshops",
  "Adventure Training",
];

export default function Hero() {
  return (
    <section id="home" className="section-spacing overflow-hidden bg-[radial-gradient(900px_500px_at_85%_20%,rgba(92,225,230,0.45),transparent_60%)] bg-bgmild">
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

        {/* Hero content */}
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
            360° education & opportunity ecosystem
          </p>

          <h1 className="hero_heading-2 tracking-tight">
            One Platform.
            <span className="block text-primary-dark">
              Every Possibility.
            </span>
          </h1>

          <p className="para1 my-6 max-w-[34em] leading-relaxed text-muted">
            From academic discovery and research to professional development
            and global opportunities, YungUnitee brings everything you need
            to explore, learn and move forward together.
          </p>

          <p className="mb-8 text-sm font-bold">
            YungUnitee -{" "}
            <span className="text-primary-dark">
              Powered by iKounselor
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#services">
              EXPLORE OUR SERVICES
            </Button>

            {/* <Button href="#contact" variant="outline">
              ENQUIRE NOW
            </Button> */}
          </div>
        </div>

        <div role="img" aria-label="YungUnitee at the centre of nine connected service areas" className="relative mx-auto flex aspect-square w-full max-w-110 items-center justify-center">
          {/* Rotating orbit (rotates around its own centre = logo centre) */}
          <div className="orbit-spin absolute inset-0 motion-reduce:animate-none">
            {/* Dashed ring */}
            <div className="absolute inset-[12%] rounded-full border border-dashed border-primary-dark/40" />

            {orbitItems.map((item, index) => {
              const angle = (index * 360) / orbitItems.length - 90;
              const radians = (angle * Math.PI) / 180;
              const x = 50 + 38 * Math.cos(radians);
              const y = 50 + 38 * Math.sin(radians);

              return (
                // Outer: positions + centres the label (static transform)
                <div
                  key={item}
                  className="absolute z-20"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Inner: counter-rotates so text stays upright */}
                  <span className="orbit-counter motion-reduce:animate-none block whitespace-nowrap rounded-full bg-light px-3 py-1.5 text-[10px] font-bold text-secondary shadow-lg sm:text-xs">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Fixed centre logo */}
          <div className="relative z-30 flex h-49 w-40 items-center justify-center rounded-full ">
            <Image
              src="/graduate-1.png"
              alt="YungUnitee"
             fill
              className="h-auto w-20 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
