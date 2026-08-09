import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { site } from "@/content/site";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${site.legalName} — 100% volunteer-run, every dollar goes to programs for San Diego youth and community.`,
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Donate"
        intro="HADE is 100% volunteer-run — nobody takes a salary. Every dollar you give goes directly into backpacks, meals, gym time, and bus seats for San Diego youth."
      />

      {/* ============ WAYS TO GIVE ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_20rem]">
          <div>
            <p className="eyebrow">Ways to give</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">Pick what works for you</h2>
          </div>
          <Photo
            src=""
            alt="What donations become — backpacks, meals, bus seats"
            slot={16}
            className="hidden aspect-[16/9] md:block"
            sizes="20rem"
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {site.donationMethods.map((m) => (
            <a
              key={m.name}
              href={m.url}
              className="group border border-line p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <h3 className="display text-2xl">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {m.description}
              </p>
              <span className="mt-4 inline-block border-b-2 border-ink pb-0.5 text-xs font-bold uppercase tracking-widest">
                Give via {m.name}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-muted">
          {site.legalName} is a {site.taxStatus} (EIN {site.ein}). Donations
          are tax-deductible to the extent allowed by law. For receipts or
          questions, <Link href="/contact" className="underline">contact us</Link>.
        </p>
      </section>

      {/* ============ WHERE IT GOES ============ */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow">Where your money goes</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Fund a specific program
          </h2>
          <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
            Want your donation to go somewhere specific? Mention the program
            when you give, and that's where it goes.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {programs.map((p) => (
              <div key={p.slug} className="bg-paper p-6">
                <div className="flex items-baseline gap-3">
                  <span className="display text-xl text-ink/25">{p.number}</span>
                  <h3 className="display text-xl">{p.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.fundraising}
                </p>
                <Link
                  href={`/programs/${p.slug}`}
                  className="mt-3 inline-block text-xs font-bold uppercase tracking-widest underline"
                >
                  About this program
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTHER WAYS ============ */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-3xl md:text-4xl">Can't give money?</h2>
          <p className="mt-4 max-w-[50ch] leading-relaxed text-paper/80">
            Give time instead. Coaches, cooks, drivers, mentors — every
            program on this page runs on volunteers.
          </p>
          <Link
            href="/apply"
            className="mt-6 inline-block bg-paper px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
          >
            Volunteer with us
          </Link>
        </div>
      </section>
    </>
  );
}
