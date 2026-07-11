import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-8" />
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed opacity-75">
            {site.tagline}. {site.mission}
          </p>
        </div>

        <nav aria-label="Footer — pages">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] opacity-60">
            Pages
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link href="/about" className="opacity-85 hover:opacity-100">About</Link></li>
            <li><Link href="/programs" className="opacity-85 hover:opacity-100">Programs</Link></li>
            <li><Link href="/events" className="opacity-85 hover:opacity-100">Past Events</Link></li>
            <li><Link href="/contact" className="opacity-85 hover:opacity-100">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer — get involved">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] opacity-60">
            Get Involved
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link href="/donate" className="opacity-85 hover:opacity-100">Donate</Link></li>
            <li><Link href="/apply" className="opacity-85 hover:opacity-100">Apply</Link></li>
            <li><Link href="/apply" className="opacity-85 hover:opacity-100">Volunteer</Link></li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="opacity-85 hover:opacity-100">
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] opacity-60">
            Nonprofit Info
          </h2>
          <p className="text-sm leading-relaxed opacity-75">
            {site.legalName} is a {site.taxStatus}.
            <br />
            EIN: {site.ein}
            <br />
            {site.city}
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-paper/15 px-5 py-6 text-xs opacity-60">
        <span>© {new Date().getFullYear()} {site.legalName}</span>
        <span>Community built. Community funded.</span>
      </div>
      <div className="tape" aria-hidden="true" />
    </footer>
  );
}
