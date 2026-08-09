import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { DonateBand } from "@/components/CTA";
import { applications } from "@/content/apply";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to join HADE programs — the college tour, youth basketball, or volunteering.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Apply"
        intro="Students, players, volunteers — everything below is free to join. Pick one and put your name in."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        {/* Three-photo strip: what joining actually looks like */}
        <div className="mb-12 grid grid-cols-3 gap-3">
          <Photo src="" alt="A student on the college tour" slot={12} className="aspect-[3/4]" sizes="33vw" />
          <Photo src="" alt="Basketball season in action" slot={13} className="mt-6 aspect-[3/4]" sizes="33vw" />
          <Photo src="" alt="Volunteers on event day" slot={14} className="aspect-[3/4]" sizes="33vw" />
        </div>
        <div className="flex flex-col gap-6">
          {applications.map((a) => (
            <article
              key={a.title}
              className={`border p-7 md:p-9 ${
                a.open ? "border-ink" : "border-line opacity-60"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${
                    a.open ? "bg-ink text-paper" : "bg-line text-muted"
                  }`}
                >
                  {a.open ? "Open" : "Closed"}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  {a.deadline}
                </span>
              </div>
              <h2 className="display mt-4 text-2xl md:text-3xl">{a.title}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted">
                For: {a.who}
              </p>
              <p className="mt-4 max-w-[60ch] leading-relaxed">{a.description}</p>
              {a.open && (
                <a
                  href={a.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-ink px-6 py-3 text-sm font-bold uppercase tracking-widest text-paper transition-opacity hover:opacity-85"
                >
                  Start application
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted">
          Questions about any application? Reach out on the{" "}
          <a href="/contact" className="underline">contact page</a> — a real
          person will get back to you.
        </p>
      </section>

      <DonateBand
        title="Know a student who should be here?"
        text="Send them this page. Most of our students found us through one person who thought of them."
      />
    </>
  );
}
