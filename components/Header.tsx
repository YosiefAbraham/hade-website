"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Past Events" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" onClick={() => setOpen(false)} aria-label="HADE home">
          <Logo className="h-7" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b-2 pb-1 text-[13px] font-semibold uppercase tracking-widest transition-colors ${
                pathname.startsWith(l.href)
                  ? "border-paper"
                  : "border-transparent opacity-80 hover:border-paper hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-paper px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-[2px] w-6 bg-paper ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] w-6 bg-paper transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          className="border-t border-paper/15 px-5 pb-8 pt-4 md:hidden"
          aria-label="Main mobile"
        >
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-2xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-1 inline-block bg-paper px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-ink"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
