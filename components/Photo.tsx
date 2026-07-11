import Image from "next/image";

/* Every photo on the site goes through this component.
   - If `src` has a path (e.g. "/images/events/bbq.jpg"), the photo shows.
   - If `src` is "" (empty), a clean striped placeholder shows instead,
     labeled with the photo description so editors know what belongs there. */

type Props = {
  src: string;
  alt: string;
  className?: string; // controls size/shape, e.g. "aspect-[4/3]"
  sizes?: string;
  priority?: boolean;
};

export default function Photo({
  src,
  alt,
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
      aria-label={`Photo coming soon: ${alt}`}
    >
      <span className="m-3 bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-paper">
        Photo · {alt}
      </span>
    </div>
  );
}
