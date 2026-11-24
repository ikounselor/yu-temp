import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="section-spacing bg-light">
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* About Content */}
        <div className="animate-fade-up">
          <p className="para2 mb-4 font-bold uppercase tracking-[0.14em] text-primary-dark">
            About YungUnitee
          </p>

          <h2 className="hero_heading leading-tight tracking-tight">
            A World of Opportunities, Connected.
          </h2>

          <p className="para1 mt-6 max-w-[32em] leading-relaxed text-muted">
            YungUnitee is a 360-degree platform that bridges academic
            learning, practical exposure, professional development and
            international opportunities.
          </p>

          <p className="para1 mt-4 max-w-[32em] leading-relaxed text-muted">
            It brings individuals, institutions and global content providers
            together in one connected ecosystem, for learners broadly aged
            16-35 and the schools, universities and organisations that
            support them.
          </p>
        </div>

        {/* Ecosystem Illustration */}
        <div className="mx-auto w-full max-w-115 animate-fade-up lg:translate-x-6 lg:translate-y-8">
          <Image
            src="/about/yu_ecosystem_logo.png"
            alt="YungUnitee ecosystem connecting individuals, institutions and opportunity providers"
            width={600}
            height={600}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
