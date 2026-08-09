import Link from "next/link";
import type { Program } from "@/content/programs";
import Photo from "./Photo";

/* One program tile — used on the homepage and the Programs page. */

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group block border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
    >
      <Photo
        src={program.images[0]?.src ?? ""}
        alt={program.images[0]?.alt ?? program.name}
        slot={program.images[0]?.slot}
        className="aspect-[16/10]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="p-5">
        <div className="flex items-baseline gap-3">
          <span className="display text-2xl text-ink/25 transition-colors group-hover:text-ink">
            {program.number}
          </span>
          <h3 className="display text-xl">{program.name}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {program.short}
        </p>
        <span className="mt-4 inline-block border-b-2 border-ink pb-0.5 text-xs font-bold uppercase tracking-widest">
          Learn more
        </span>
      </div>
    </Link>
  );
}
