import Link from "next/link";
import Photo from "@/components/Photo";
import PhotoMosaic from "@/components/PhotoMosaic";
import ProgramCard from "@/components/ProgramCard";
import { ButtonSolid, ButtonOutline, DonateBand } from "@/components/CTA";
import { site } from "@/content/site";
import { programs } from "@/content/programs";
import { pastEvents } from "@/content/events";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="display text-6xl leading-none md:text-8xl">
              Us.
              <br />
              We.
              <br />
              Our.
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-paper/85">
              {site.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonSolid href="/donate" dark>Donate</ButtonSolid>
              <ButtonOutline href="/programs" dark>Our Programs</ButtonOutline>
            </div>
          </div>
          <Photo
            src=""
            alt="HADE community — youth and volunteers together"
            className="aspect-[4/3] md:aspect-[4/5]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
      <div className="tape" aria-hidden="true" />

      {/* ============ FACT STRIP ============ */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4">
          {site.facts.map((f) => (
            <div key={f.label} className="text-center">
              <div className="display text-3xl md:text-4xl">{f.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHO WE ARE ============ */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">
            One community, moving as one
          </h2>
          <p className="mt-5 max-w-[52ch] leading-relaxed">
            {site.missionLong}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-widest"
          >
            Read our story
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Photo src="" alt="Youth at a HADE event" className="aspect-[3/4]" sizes="25vw" />
          <Photo src="" alt="Volunteers at work" className="mt-8 aspect-[3/4]" sizes="25vw" />
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-3 text-3xl md:text-5xl">Our Programs</h2>
            </div>
            <Link
              href="/programs"
              className="border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-widest"
            >
              See all programs
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ RECENT EVENTS ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The archive</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">Past Events</h2>
          </div>
          <Link
            href="/events"
            className="border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-widest"
          >
            Full gallery
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {pastEvents.slice(0, 3).map((e) => (
            <div key={e.title + e.date}>
              <Photo src={e.image.src} alt={e.image.alt} className="aspect-[4/3]" sizes="33vw" />
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-bold">{e.title}</h3>
                <span className="shrink-0 text-xs uppercase tracking-widest text-muted">
                  {e.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ COMMUNITY MOSAIC ============ */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="eyebrow">One team. One dream.</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">The community in motion</h2>
          </div>
          <PhotoMosaic
            images={[
              { src: "", alt: "Big group photo — the whole HADE community" },
              { src: "", alt: "Youth basketball game moment" },
              { src: "", alt: "Volunteers at the supply drive" },
              { src: "", alt: "Students on the college tour" },
              { src: "", alt: "Friends Giving table" },
            ]}
          />
        </div>
      </section>

      {/* ============ DONATE BAND ============ */}
      <DonateBand />
    </>
  );
}
