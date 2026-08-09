/* ============================================================
   PAST EVENTS — the photo archive shown on the Past Events page
   (and the newest few on the homepage).
   Newest events go at the TOP of the list.
   To add photos: put files in public/images/events/ and write
   the path like "/images/events/my-photo.jpg".
   Leave src as "" to show a placeholder.
   ============================================================ */

export type PastEvent = {
  title: string;
  program: string; // which program it belongs to (shown as a tag)
  date: string; // e.g. "August 2025"
  blurb: string; // one or two sentences about how it went
  // src "" = placeholder; `slot` is the number printed on that placeholder
  image: { slot: number; src: string; alt: string };
};

export const pastEvents: PastEvent[] = [
  {
    title: "Back to School BBQ & Supply Drive",
    program: "Back to School",
    date: "August 2025",
    blurb:
      "Backpacks and full supply kits handed out to neighborhood kids ahead of the first day of school, with the grills going all afternoon.",
    image: { slot: 27, src: "", alt: "Back to school barbecue 2025" },
  },
  {
    title: "College Tour",
    program: "College Tour",
    date: "Spring 2025",
    blurb:
      "A busload of San Diego students visited university campuses — for many, their first time on a college quad.",
    image: { slot: 28, src: "", alt: "Students on the 2025 college tour" },
  },
  {
    title: "Friends Giving",
    program: "Friends Giving",
    date: "November 2024",
    blurb:
      "One long table, one shared meal. Families, elders, and students spent the holiday together.",
    image: { slot: 29, src: "", alt: "Friends Giving 2024 dinner" },
  },
  {
    title: "Feed the Homeless Drive",
    program: "Feed the Homeless",
    date: "Winter 2024",
    blurb:
      "Volunteer crews cooked, packed, and hand-delivered hot meals to unhoused neighbors across San Diego.",
    image: { slot: 30, src: "", alt: "Meal delivery volunteers, winter 2024" },
  },
  {
    title: "Youth Basketball Season",
    program: "Youth Basketball",
    date: "2024–2025 season",
    blurb:
      "A full season of games, practices, and team dinners — jerseys and gym time covered by the foundation.",
    image: { slot: 31, src: "", alt: "Youth basketball season highlights" },
  },
  {
    title: "College Prep Workshop Night",
    program: "College Prep",
    date: "Fall 2024",
    blurb:
      "Students and parents worked through applications and FAFSA forms side-by-side with volunteer mentors.",
    image: { slot: 32, src: "", alt: "College prep workshop night" },
  },
];
