import Image from "next/image";

/* Every photo on the site goes through this component.
   - If `src` has a path (e.g. "/images/events/bbq.jpg"), the photo shows.
   - If `src` is "" (empty), a clean striped placeholder shows instead,
     labeled with the photo description so editors know what belongs there.
   - `slot` is that placeholder's permanent number, printed big in the middle
     of the box. Numbers never change, so "replace photo 27" always means the
     same spot. See PLACEHOLDERS.md for the full list. */

type Props = {
  src: string;
  alt: string;
  slot?: number; // placeholder number shown while `src` is empty
  className?: string; // controls size/shape, e.g. "aspect-[4/3]"
  sizes?: string;
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
  slot,
  className = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-mist ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`placeholder-stripes relative flex items-end overflow-hidden border border-line ${className}`}
      role="img"
      aria-label={
        slot ? `Photo ${slot} coming soon: ${alt}` : `Photo coming soon: ${alt}`
      }
    >
      {slot && (
        <span
          aria-hidden="true"
          className="display pointer-events-none absolute inset-0 flex items-center justify-center pb-6 text-7xl text-ink/45 md:text-8xl"
        >
          {slot}
        </span>
      )}
      <span className="relative m-3 bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-paper">
        {slot ? `Photo ${slot}` : "Photo"} · {alt}
      </span>
    </div>
  );
}
