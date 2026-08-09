import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { DonateBand } from "@/components/CTA";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { milestones } from "@/content/history";

export const metadata: Metadata = {
  title: "About",
  description: `The story, mission, and people behind ${site.legalName}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HADE"
        title="Hade means one"
        intro="In Tigrinya, “hade” is the number one. That's the whole idea: one community, one table, one team — youth supporting each other regardless of religion, politics, or where their family comes from."
      />

      {/* ============ STORY ============ */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            Built by the community it serves
          </h2>
          <div className="mt-5 flex flex-col gap-4 leading-relaxed">
            <p>
              HADE started with neighbors doing what neighbors do: organizing a
              backpack drive, cooking for people who needed a meal, getting a
              group of kids into a gym. In {site.foundedYear} that work became
              the {site.legalName}, and in {site.rulingYear} the IRS recognized
              it as a {site.taxStatus}.
            </p>
            <p>
              Today HADE runs year-round programming for San Diego youth —
              college tours and prep, a back-to-school supply drive and
              barbecue, Friends Giving, feed-the-homeless drives, youth
              basketball, and community events in between. Every program is
              volunteer-run and community-funded.
            </p>
            <p>
              The name is the mission. Whatever divides the adults — religion,
              politics, background — the youth grow up as one community. Us.
              We. Our.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Photo src="" alt="The HADE founding group" slot={9} className="aspect-[4/3]" />
          <Photo src="" alt="An early HADE community event" slot={10} className="aspect-[16/9]" />
        </div>
      </section>

      {/* ============ HISTORY TIMELINE ============ */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/60">
            How we got here
          </p>
          <h2 className="display mt-3 text-3xl md:text-5xl">The road so far</h2>
          <ol className="mt-12 flex flex-col gap-0">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className={`grid gap-6 border-t border-paper/15 py-10 md:grid-cols-[8rem_1fr_18rem] md:gap-10 ${
                  i === milestones.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="display text-4xl text-paper/40 md:text-5xl">
                  {m.year}
                </div>
                <div>
                  <h3 className="display text-2xl">{m.title}</h3>
                  <p className="mt-3 max-w-[55ch] leading-relaxed text-paper/80">
                    {m.text}
                  </p>
                </div>
                <Photo
                  src={m.image.src}
                  alt={m.image.alt}
                  slot={m.image.slot}
                  className="aspect-[16/10] md:aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 18rem"
                />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="tape" aria-hidden="true" />

      {/* ============ IMPACT ============ */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow">Our impact</p>
          <h2 className="display mt-3 text-3xl md:text-4xl">
            What the community has made possible
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {site.impact.map((s) => (
              <div key={s.label}>
                <div className="display text-4xl md:text-5xl">{s.value}</div>
                <div className="mt-2 max-w-[20ch] text-xs font-semibold uppercase tracking-widest text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[60ch] text-sm leading-relaxed text-muted">
            HADE is 100% volunteer-run — no officer or director takes any
            compensation. Every dollar raised goes back into programming for
            San Diego youth and community.
          </p>
        </div>
      </section>

      {/* ============ FULL-WIDTH GROUP PHOTO ============ */}
      <Photo
        src=""
        alt="Everyone together — full HADE group photo"
        slot={11}
        className="aspect-[21/9] w-full"
        sizes="100vw"
      />

      {/* ============ TEAM ============ */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">The people</p>
        <h2 className="display mt-3 text-3xl md:text-4xl">Board &amp; Leadership</h2>
        <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
          The foundation is led by a volunteer board. None of us are paid —
          all of us are from the community we serve.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m) => (
            <div key={m.name}>
              <Photo src={m.image.src} alt={m.image.alt} slot={m.image.slot} className="aspect-square" sizes="20vw" />
              <h3 className="mt-3 font-bold leading-snug">{m.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {m.role}
              </p>
              {m.bio && <p className="mt-2 text-sm text-muted">{m.bio}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ============ TRANSPARENCY ============ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="eyebrow">For grantmakers &amp; donors</p>
          <div className="mt-4 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold">Legal name</h3>
              <p className="mt-1 text-sm text-muted">{site.legalName}</p>
            </div>
            <div>
              <h3 className="font-bold">Tax status</h3>
              <p className="mt-1 text-sm text-muted">
                {site.taxStatus} · ruling year {site.rulingYear}
              </p>
            </div>
            <div>
              <h3 className="font-bold">EIN</h3>
              <p className="mt-1 text-sm text-muted">{site.ein}</p>
            </div>
          </div>
        </div>
      </section>

      <DonateBand
        title="Be part of the one"
        text="Donate, volunteer, or send a student our way — the community is the program."
      />
    </>
  );
}
