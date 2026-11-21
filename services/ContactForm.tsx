"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Button from "@/components/ui/Button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type NotifyValues = {
  name: string;
  email: string;
  area: string;
};

const initialForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const initialNotify: NotifyValues = {
  name: "",
  email: "",
  area: "",
};

const interests = [
  "Research Programs",
  "Assessments & Psychometrics",
  "International Programs",
  "Internships & Professional Exposure",
  "Certifications",
  "eBooks & Learning Resources",
  "Counselling & Guidance",
  "Masterclasses",
  "Institutional Partnerships",
  "Other",
];

const inputClasses = "w-full rounded-[10px] border border-primary/80 bg-light px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClasses = "mb-1 block text-sm font-semibold text-secondary";

const errorClasses = "mt-1 block min-h-4 text-xs text-negative";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [notify, setNotify] = useState<NotifyValues>(initialNotify);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notifyErrors, setNotifyErrors] = useState<Record<string, string>>(
    {}
  );

  const [success, setSuccess] = useState("");
  const [notifySuccess, setNotifySuccess] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Listen for service CTA events.
  useEffect(() => {
    const handleInterest = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      setForm((previous) => ({
        ...previous,
        interest: customEvent.detail,
      }));
    };

    const handleModal = () => {
      setModalOpen(true);
      setNotifySuccess("");
      setNotifyErrors({});
    };

    window.addEventListener("select-interest", handleInterest);
    window.addEventListener("open-notify-modal", handleModal);

    return () => {
      window.removeEventListener("select-interest", handleInterest);
      window.removeEventListener("open-notify-modal", handleModal);
    };
  }, []);

  function handleFormChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function handleNotifyChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setNotify((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotifyErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function validateForm() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "This field is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "This field is required.";
    } else if (!validateEmail(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "This field is required.";
    } else if (!/^[+()\d\s-]{7,16}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.interest) {
      nextErrors.interest = "Please select an area of interest.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "This field is required.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess("");

    if (!validateForm()) return;

    console.info("Preview submission. No data sent:", form);

    setSuccess(
      "Your details are saved"
    );

    setForm(initialForm);
    setErrors({});
  }

  function handleNotifySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!notify.name.trim()) {
      nextErrors.name = "This field is required.";
    }

    if (!notify.email.trim()) {
      nextErrors.email = "This field is required.";
    } else if (!validateEmail(notify.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!notify.area.trim()) {
      nextErrors.area = "This field is required.";
    }

    setNotifyErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    console.info("Preview notification submission:", notify);

    setNotifySuccess(
      "Your details are saved"
    );

    setNotify(initialNotify);
  }

  return (
    <>
      {/* Main Contact Form */}
      <div className="rounded-brand bg-light p-6 shadow-[0_20px_60px_rgba(14,143,149,0.15)] sm:p-8">
        <form onSubmit={handleSubmit} noValidate className="grid gap-5">
          {/* Name and Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>

              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleFormChange}
                className={inputClasses}
                aria-invalid={!!errors.name}
              />

              <span className={errorClasses}>{errors.name}</span>
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleFormChange}
                className={inputClasses}
                aria-invalid={!!errors.email}
              />

              <span className={errorClasses}>{errors.email}</span>
            </div>
          </div>

          {/* Phone and Interest */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleFormChange}
                className={inputClasses}
                aria-invalid={!!errors.phone}
              />

              <span className={errorClasses}>{errors.phone}</span>
            </div>

            <div>
              <label htmlFor="interest" className={labelClasses}>
                I am interested in
              </label>

              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleFormChange}
                className={inputClasses}
                aria-invalid={!!errors.interest}
              >
                <option value="">Select...</option>

                {interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>

              <span className={errorClasses}>{errors.interest}</span>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleFormChange}
              className={inputClasses}
              aria-invalid={!!errors.message}
            />

            <span className={errorClasses}>{errors.message}</span>
          </div>

          <div>
            <Button type="submit">SUBMIT ENQUIRY</Button>
          </div>

          {success && (
            <div
              role="status"
              className="rounded-brand bg-bgmild p-5 text-sm text-secondary"
            >
              {success}
            </div>
          )}
        </form>
      </div>

      {/* Certifications Notification Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-secondary/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notify-heading"
            className="w-full max-w-110 overflow-hidden rounded-brand bg-light shadow-2xl"
          >
            {/* Modal Header */}
            <div className="bg-linear-to-br from-primary to-teal p-6">
              {/* <div className="flex items-start justify-between gap-4">

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close modal"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-secondary transition hover:bg-secondary/10"
                >
                  ×
                </button>
              </div> */}

              <h3
                id="notify-heading"
                className="mt-4 text-2xl font-extrabold leading-tight"
              >
                Certifications are on their way.
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form
                onSubmit={handleNotifySubmit}
                noValidate
                className="grid gap-4"
              >
                <p className="mb-2 text-sm leading-relaxed text-muted">
                  Leave your details and tell us what you’d like to learn.
                  We’ll use them to let you know when certifications are ready.
                </p>

                <div>
                  <label htmlFor="notify-name" className={labelClasses}>
                    Name
                  </label>

                  <input
                    id="notify-name"
                    name="name"
                    value={notify.name}
                    onChange={handleNotifyChange}
                    className={inputClasses}
                  />

                  <span className={errorClasses}>
                    {notifyErrors.name}
                  </span>
                </div>

                <div>
                  <label htmlFor="notify-email" className={labelClasses}>
                    Email address
                  </label>

                  <input
                    id="notify-email"
                    name="email"
                    type="email"
                    value={notify.email}
                    onChange={handleNotifyChange}
                    className={inputClasses}
                  />

                  <span className={errorClasses}>
                    {notifyErrors.email}
                  </span>
                </div>

                <div>
                  <label htmlFor="notify-area" className={labelClasses}>
                    Area of interest
                  </label>

                  <input
                    id="notify-area"
                    name="area"
                    placeholder="e.g. Data Analytics, Hospitality"
                    value={notify.area}
                    onChange={handleNotifyChange}
                    className={inputClasses}
                  />

                  <span className={errorClasses}>
                    {notifyErrors.area}
                  </span>
                </div>

                <Button type="submit" variant="amber" className="mt-2">
                  NOTIFY ME
                </Button>

                {notifySuccess && (
                  <div
                    role="status"
                    className="rounded-brand bg-bgmild p-4 text-sm"
                  >
                    {notifySuccess}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
