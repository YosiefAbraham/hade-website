import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import { DonateBand } from "@/components/CTA";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "College tours, back-to-school drives, youth basketball, Friends Giving, and more — HADE's year-round programs for San Diego youth and community.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our Programs"
        intro="Seven programs, one goal: youth and community moving as one. Every program is volunteer-run, community-funded, and free for the youth who join."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <DonateBand />
    </>
  );
}
