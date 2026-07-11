import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { DonateBand } from "@/components/CTA";
import { pastEvents } from "@/content/events";

export const metadata: Metadata = {
  title: "Past Events",
  description:
    "A look back at HADE's community events — back-to-school drives, college tours, Friends Giving, and more.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="The archive"
        title="Past Events"
        intro="Every event here was funded by the community and run by volunteers. This is what “us, we, our” looks like in practice."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((e) => (
            <article key={e.title + e.date}>
              <Photo
                src={e.image.src}
                alt={e.image.alt}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="mt-4 flex items-center gap-3">
                <span className="bg-ink px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-paper">
                  {e.program}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  {e.date}
                </span>
              </div>
              <h2 className="display mt-3 text-xl">{e.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <DonateBand
        title="Help us throw the next one"
        text="Every event on this page started with the community chipping in. The next one starts the same way."
      />
    </>
  );
}
