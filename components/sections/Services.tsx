/// <reference lib="dom" />
"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { services, type Service } from "@/data/services";


const visualStyles: Record<Service["visual"], string> = {
  cyan: "bg-gradient-to-br from-cyan to-teal",
  white: "border border-primary-200 bg-gradient-to-br from-light to-primary",
  teal: "bg-gradient-to-br from-teal to-primary-dark",
  amber: "bg-gradient-to-br from-premium-3 to-tertiary",
};



function ServiceVisual({ service }: { service: Service }) {
  return (
    <div
      className={`group relative flex min-h-65 items-end overflow-hidden rounded-brand text-secondary sm:min-h-85 ${visualStyles[service.visual]}`}
    >
      {/* Background Image */}
      <Image
        src={service.image}
        alt={`${service.name} illustration`}
        fill
        sizes="(max-width: 1024px) 92vw, 550px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay for chip visibility */}
      <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/20 to-transparent" />

      {/* Coming Soon Label */}
      {service.comingSoon && (
        <span className="absolute left-5 top-5 z-10 rounded-full bg-secondary px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-tertiary">
          Coming soon
        </span>
      )}

      {/* Chips */}
      <ul className="relative z-10 flex flex-wrap gap-2 p-6 sm:p-8">
        {service.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-light/30 bg-light/95 px-3.5 py-2 text-xs font-semibold text-secondary shadow-sm backdrop-blur-sm"
          >
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}


function ServiceSection({ service, index }: { service: Service; index: number }) {
  const isDark = service.background === "dark";
  const isSoft = service.background === "soft";
  const reverse = index % 2 === 1;

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className={`section-spacing ${
        isDark
          ? "bg-secondary text-light"
          : isSoft ? "bg-bgmild" : "bg-light"
      }`}
    >
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

        {/* Text */}
        <div className={reverse ? "lg:order-2" : ""}>
          <p
            className={`mb-4 text-xs font-bold uppercase tracking-[0.14em] ${
              isDark ? "text-primary" : "text-primary-dark"
            }`}
          >
            {service.number} · {service.name}
          </p>

          <h3
            id={`${service.id}-heading`}
            className="heading mb-5 leading-tight tracking-tight"
          >
            {service.title}
          </h3>

          <p
            className={`para1 mb-8 max-w-[34em] leading-relaxed ${
              isDark ? "text-light/80" : "text-muted"
            }`}
          >
            {service.description}
          </p>

          {service.comingSoon ? (
            <Button
              variant="amber"
              onClick={() =>
                window.dispatchEvent(new Event("open-notify-modal"))
              }
            >
              NOTIFY ME
            </Button>
          ) : (
 
            <Button
              href="#contact"
              onClick={() => {
                // Update the selected interest
                window.dispatchEvent(
                  new CustomEvent("select-interest", {
                    detail:
                      service.id === "international"
                        ? "International Programs"
                        : service.name,
                  })
                );
            
                // Explicitly scroll to Contact every time
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              ENQUIRE NOW
            </Button>

          )}
        </div>

        {/* Visual */}
        <div className={reverse ? "lg:order-1" : ""}>
          <ServiceVisual service={service} />
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div id="services">
      {/* Services Introduction */}
      <section className="mb-10 bg-light">
        <div className="mx-auto w-[92%] max-w-290">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
            Our Services
          </p>

          <h2 className="hero_heading max-w-3xl leading-tight tracking-tight">
            Nine ways to explore, learn and move forward.
          </h2>

          <p className="para1 mt-5 max-w-[36em] leading-relaxed text-muted">
            Some services are open for enquiries today; others are being
            prepared. Tell us what interests you and we’ll guide you from there.
          </p>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
