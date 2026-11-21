import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "About YU", href: "#about" },
  { label: "For Institutions", href: "#institutions" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Research", href: "#research" },
  { label: "Assessments", href: "#assessments" },
  { label: "International", href: "#international" },
  { label: "Internships", href: "#internships" },
  { label: "Certifications", href: "#certifications" },
];

export default function Footer() {
  return (
    <footer className="bg-bgmild py-14 sm:py-16">
      <div className="mx-auto w-[92%] max-w-290">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="mb-4 inline-flex items-center"
            >
                <Image
                  src="/services/yungunitee.png"
                  alt="YungUnitee"
                  width={180}
                  height={55}
                  className="h-auto w-40 object-contain"
                  priority
                />
            </Link>

            <p className="para1 font-semibold">
              Powered by iKounselor
            </p>
          </div>


          <div>
            <h5 className="para2 mb-4 font-bold uppercase tracking-widest text-primary-dark">
              Explore
            </h5>

            <ul className="links grid gap-2">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="links transition-colors hover:text-primary-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="para2 mb-4 font-bold uppercase tracking-widest text-primary-dark">
              Services
            </h5>

            <ul className="links grid gap-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="links transition-colors hover:text-primary-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="para2 mb-4 font-bold uppercase tracking-widest text-primary-dark">
              Contact &amp; Social
            </h5>

            <ul className="para2 grid gap-2 italic text-muted">
              <li>[Email ]</li>
              <li>[Phone ]</li>
              <li>[Address ]</li>
              <li>[Social links ]</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-primary-200 pt-5 text-xs leading-relaxed text-muted sm:text-sm">
          © 2026 YungUnitee. Powered by iKounselor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
