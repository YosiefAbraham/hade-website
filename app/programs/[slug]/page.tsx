import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { ButtonSolid, ButtonOutline } from "@/components/CTA";
import { programs, getProgram } from "@/content/programs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.name, description: program.short };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const [mainImage, ...moreImages] = program.images;

  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Link
            href="/programs"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/60 hover:text-paper"
          >
            ← All programs
          </Link>
          <div className="mt-4 flex items-baseline gap-4">
            <span className="display text-4xl text-paper/30 md:text-6xl">
              {program.number}
            </span>
            <h1 className="display text-4xl md:text-6xl">{program.name}</h1>
          </div>
          <p className="mt-5 max-w-[55ch] leading-relaxed text-paper/85">
            {program.short}
          </p>
        </div>
      </section>
      <div className="tape" aria-hidden="true" />

      {/* ============ BODY ============ */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          {mainImage && (
            <Photo
              src={mainImage.src}
              alt={mainImage.alt}
              className="aspect-[16/9]"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          )}
          <div className="mt-8 flex flex-col gap-4 leading-relaxed">
            {program.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {moreImages.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3">
              {moreImages.map((img) => (
                <Photo
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3]"
                  sizes="30vw"
                />
              ))}
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-8">
          <div className="border border-line p-6">
            <h2 className="display text-xl">At a glance</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {program.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-[7px] h-2 w-2 shrink-0 bg-ink" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink p-6 text-paper">
            <h2 className="display text-xl">Fund this program</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {program.fundraising}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonSolid href="/donate" dark>Donate</ButtonSolid>
              <ButtonOutline href="/apply" dark>Apply</ButtonOutline>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
