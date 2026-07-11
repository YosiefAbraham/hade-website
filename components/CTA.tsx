import Link from "next/link";

/* Reusable button links. `dark` = for use on black backgrounds. */

export function ButtonSolid({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-85 ${
        dark ? "bg-paper text-ink" : "bg-ink text-paper"
      }`}
    >
      {children}
    </Link>
  );
}

export function ButtonOutline({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
        dark
          ? "border-paper text-paper hover:bg-paper hover:text-ink"
          : "border-ink text-ink hover:bg-ink hover:text-paper"
      }`}
    >
      {children}
    </Link>
  );
}

/* Full-width black call-to-action band used at the bottom of pages. */
export function DonateBand({
  title = "Every program runs on the community",
  text = "HADE is 100% volunteer-run. Every dollar donated goes directly into programs for San Diego youth.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-[50ch] leading-relaxed text-paper/80">{text}</p>
        </div>
        <div className="flex shrink-0 gap-3">
          <ButtonSolid href="/donate" dark>Donate</ButtonSolid>
          <ButtonOutline href="/apply" dark>Get Involved</ButtonOutline>
        </div>
      </div>
    </section>
  );
}
