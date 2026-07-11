/* Black banner at the top of every inner page. */

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/60">
            {eyebrow}
          </p>
          <h1 className="display mt-3 text-4xl md:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-5 max-w-[55ch] leading-relaxed text-paper/85">
              {intro}
            </p>
          )}
        </div>
      </section>
      <div className="tape" aria-hidden="true" />
    </>
  );
}
