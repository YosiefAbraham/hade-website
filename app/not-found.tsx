import Link from "next/link";
import { ButtonSolid } from "@/components/CTA";

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/60">
          404 — Page not found
        </p>
        <h1 className="display text-6xl md:text-8xl">
          Out of
          <br />
          bounds.
        </h1>
        <p className="max-w-[45ch] leading-relaxed text-paper/85">
          That page doesn't exist — but the community does. Head back home
          and find what you were looking for.
        </p>
        <div className="mt-2 flex gap-3">
          <ButtonSolid href="/" dark>Back home</ButtonSolid>
          <Link
            href="/contact"
            className="inline-block border-2 border-paper px-6 py-3 text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="tape" aria-hidden="true" />
    </section>
  );
}
