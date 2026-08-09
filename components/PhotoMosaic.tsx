import Photo from "./Photo";

/* A full-width mosaic of photo slots with varied sizes.
   Pass 5 images (src can be "" for placeholders). */

export type MosaicImage = { src: string; alt: string; slot?: number };

export default function PhotoMosaic({ images }: { images: MosaicImage[] }) {
  const [a, b, c, d, e] = images;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {/* Large lead photo spans two columns and rows */}
      {a && (
        <Photo src={a.src} alt={a.alt} slot={a.slot} className="col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" sizes="50vw" />
      )}
      {b && <Photo src={b.src} alt={b.alt} slot={b.slot} className="aspect-square" sizes="25vw" />}
      {c && <Photo src={c.src} alt={c.alt} slot={c.slot} className="aspect-square" sizes="25vw" />}
      {d && <Photo src={d.src} alt={d.alt} slot={d.slot} className="aspect-square" sizes="25vw" />}
      {e && <Photo src={e.src} alt={e.alt} slot={e.slot} className="aspect-square" sizes="25vw" />}
    </div>
  );
}
