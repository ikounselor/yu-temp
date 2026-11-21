import ContactForm from "@/services/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bgmild py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-[92%] max-w-290 grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Contact Heading */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
            Contact
          </p>

          <h2 className="hero_heading leading-tight tracking-tight">
            Your Next Opportunity Starts Here.
          </h2>

          <p className="para1 mt-5 max-w-[34em] leading-relaxed text-muted">
            Whether you're exploring your next academic step, looking for
            professional exposure or seeking opportunities for your
            institution, let's find the right path together.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
