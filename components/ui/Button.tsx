"use client";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  variant?: "dark" | "outline" | "amber" | "primary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  dark: "bg-secondary text-light border-light hover:bg-primary-dark hover:border-primary-dark",
  outline:"bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-light",
  amber:"bg-tertiary text-secondary border-tertiary hover:bg-secondary hover:text-tertiary hover:border-secondary",
  primary:"bg-primary text-secondary border-primary hover:bg-light hover:border-light",
};

export default function Button({
  children,
  href,
  target,
  variant = "dark",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `btn_font inline-flex items-center justify-center rounded-full border-1 px-7 py-3.5 tracking-widest transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-primary-dark focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
