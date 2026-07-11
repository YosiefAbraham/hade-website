import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — questions, partnerships, volunteering, press.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Contact"
        intro="Questions, ideas, partnerships, press, or a student we should know about — reach out and a real person will reply."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-10">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="display mt-2 inline-block break-all text-2xl underline decoration-2 underline-offset-4 md:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-muted">
              Best for partnerships, donations, and grant inquiries.
            </p>
          </div>

          <div>
            <p className="eyebrow">Instagram</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="display mt-2 inline-block text-2xl underline decoration-2 underline-offset-4 md:text-3xl"
            >
              @hade.sandiego
            </a>
            <p className="mt-2 text-sm text-muted">
              Fastest way to reach us — and where event photos land first.
            </p>
          </div>

          <div>
            <p className="eyebrow">Based in</p>
            <p className="display mt-2 text-2xl md:text-3xl">{site.city}</p>
          </div>
        </div>

        <div className="border border-line p-7 md:p-9">
          <h2 className="display text-2xl">For grantmakers</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We're glad you're here. The quick facts:
          </p>
          <dl className="mt-6 flex flex-col gap-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="font-bold">Legal name</dt>
              <dd className="text-right text-muted">{site.legalName}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="font-bold">EIN</dt>
              <dd className="text-muted">{site.ein}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="font-bold">Status</dt>
              <dd className="text-right text-muted">{site.taxStatus}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="font-bold">Ruling year</dt>
              <dd className="text-muted">{site.rulingYear}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-bold">Staffing</dt>
              <dd className="text-right text-muted">100% volunteer — zero compensated officers</dd>
            </div>
          </dl>
          <a
            href={`mailto:${site.email}?subject=Grant inquiry — ${site.legalName}`}
            className="mt-8 inline-block bg-ink px-6 py-3 text-sm font-bold uppercase tracking-widest text-paper transition-opacity hover:opacity-85"
          >
            Email about a grant
          </a>
        </div>
      </section>
    </>
  );
}
