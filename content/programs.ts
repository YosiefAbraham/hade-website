/* ============================================================
   PROGRAMS — one entry per program.
   To edit a program: change the text between quotes.
   To add a photo: put the file in public/images/programs/
   and write its path like "/images/programs/my-photo.jpg".
   Leave image src as "" to show a neat placeholder instead.
   ============================================================ */

export type ProgramImage = {
  src: string; // "" = show placeholder; otherwise "/images/programs/file.jpg"
  alt: string; // short description of the photo (used for accessibility)
};

export type Program = {
  slug: string; // used in the web address, e.g. /programs/college-tour
  number: string; // "jersey number" shown on the program card
  name: string;
  short: string; // one-liner shown on cards
  description: string[]; // paragraphs shown on the program's own page
  highlights: string[]; // bullet points shown on the program's own page
  fundraising: string; // how donations power this program
  images: ProgramImage[];
};

export const programs: Program[] = [
  {
    slug: "college-tour",
    number: "01",
    name: "College Tour",
    short:
      "A multi-day trip that puts San Diego students on real college campuses — not just in brochures.",
    description: [
      "Every year we take a group of high school students on the road to visit universities across California and beyond. For many of them it is the first time setting foot on a college campus, meeting admissions staff, and picturing themselves there.",
      "The tour is fully funded by community donations and fundraising events, so no student is ever turned away because of cost. Transportation, lodging, meals, and campus visits are all covered.",
    ],
    highlights: [
      "Multi-day trip visiting several university campuses",
      "Open to San Diego high school students — no GPA cutoff",
      "Fully funded: transportation, lodging, and meals covered",
      "Led by volunteer mentors and alumni of the program",
    ],
    fundraising:
      "Donations cover the charter bus, hotel rooms, meals, and campus visit fees. Every dollar raised goes directly to getting students on campus.",
    images: [
      { src: "", alt: "Students on a university campus during the tour" },
      { src: "", alt: "Group photo in front of a college entrance" },
      { src: "", alt: "Students in a campus lecture hall" },
    ],
  },
  {
    slug: "college-prep",
    number: "02",
    name: "College Prep",
    short:
      "Application workshops, FAFSA nights, and one-on-one help for students figuring out what comes after high school.",
    description: [
      "Getting into college takes more than good grades — it takes someone in your corner who has done it before. Our college prep events pair students with volunteers who walk them through applications, essays, financial aid, and scholarship deadlines.",
      "Many of our students are the first in their family to apply to college. We make sure they never have to figure it out alone.",
    ],
    highlights: [
      "Application and essay-writing workshops",
      "FAFSA and financial aid nights for students and parents",
      "Scholarship search support",
      "One-on-one mentoring from volunteers who've been through it",
    ],
    fundraising:
      "Donations fund workshop materials, application fee support, and space rentals for prep nights.",
    images: [
      { src: "", alt: "A mentor helping a student with an application" },
      { src: "", alt: "Students at a college prep workshop" },
    ],
  },
  {
    slug: "back-to-school",
    number: "03",
    name: "Back to School BBQ",
    short:
      "Backpacks, notebooks, and school supplies handed out at a free community cookout before the first day of school.",
    description: [
      "Every August we throw a barbecue for the whole neighborhood — and every kid leaves ready for the first day of school. Backpacks, folders, notebooks, pencils, pens: we buy it, pack it, and hand it out, from elementary schoolers to high schoolers.",
      "It's more than supplies. It's the community showing its kids that everyone is behind them before the school year even starts.",
    ],
    highlights: [
      "Free backpacks and school supply kits, elementary through high school",
      "Community barbecue open to all families",
      "Volunteer-run supply drive in the weeks before the event",
    ],
    fundraising:
      "Donations buy the backpacks, school supplies, food, and equipment. A single backpack full of supplies costs about $25 to put together.",
    images: [
      { src: "", alt: "Tables of backpacks ready to be given out" },
      { src: "", alt: "Families at the back to school barbecue" },
      { src: "", alt: "Volunteers packing school supply kits" },
    ],
  },
  {
    slug: "friends-giving",
    number: "04",
    name: "Friends Giving",
    short:
      "Our Thanksgiving — a shared table for families and neighbors who want company as much as a meal.",
    description: [
      "Every November we host Friends Giving: one long table, one shared meal, everyone welcome. It's our answer to Thanksgiving — a night where the whole community eats together regardless of where they're from or what they celebrate.",
      "Volunteers cook, youth help serve, and nobody spends the holiday alone.",
    ],
    highlights: [
      "Free community Thanksgiving meal every November",
      "Cooked and served by volunteers and youth",
      "Open to everyone — families, elders, students, neighbors",
    ],
    fundraising:
      "Donations cover the food, the venue, and to-go meals for families who can't make it in person.",
    images: [
      { src: "", alt: "The Friends Giving dinner table" },
      { src: "", alt: "Volunteers serving food at Friends Giving" },
    ],
  },
  {
    slug: "feed-the-homeless",
    number: "05",
    name: "Feed the Homeless",
    short:
      "Meals cooked, packed, and hand-delivered across San Diego by volunteer crews.",
    description: [
      "Several times a year our volunteers raise funds, buy groceries, cook meals, and deliver them directly to unhoused neighbors across San Diego. Youth volunteers ride along — for many it's their first experience of service, and it sticks.",
      "We keep it simple: real food, made by hand, delivered face to face.",
    ],
    highlights: [
      "Meals cooked and packed by volunteer crews",
      "Hand-delivered across San Diego",
      "Youth volunteers welcome — service starts young",
    ],
    fundraising:
      "Donations buy the groceries and packaging. Every few dollars puts another hot meal in someone's hands.",
    images: [
      { src: "", alt: "Volunteers preparing meals in the kitchen" },
      { src: "", alt: "Packed meals ready for delivery" },
    ],
  },
  {
    slug: "youth-basketball",
    number: "06",
    name: "Youth Basketball",
    short:
      "A league for kids who need a team as much as a jump shot — gym time and gear fully covered.",
    description: [
      "Our youth basketball program gives San Diego kids a team, a coach, and a place to be every week. Jerseys, equipment, and gym time are covered by the foundation so cost is never the reason a kid stays home.",
      "The court is where a lot of our mentorship actually happens — older players coach younger ones, and the team sticks together off the court too.",
    ],
    highlights: [
      "Organized youth teams with volunteer coaches",
      "Jerseys, equipment, and gym time fully covered",
      "Mentorship built in — older youth coach younger ones",
    ],
    fundraising:
      "Donations pay for gym rentals, jerseys, basketballs, and league fees.",
    images: [
      { src: "", alt: "The youth basketball team on the court" },
      { src: "", alt: "A game in progress" },
      { src: "", alt: "Team huddle with coaches" },
    ],
  },
  {
    slug: "community-events",
    number: "07",
    name: "Community Events",
    short:
      "Block parties, clean-ups, and gatherings that keep the neighborhood connected all year long.",
    description: [
      "Between the big annual events, we keep the community moving: park meetups, clean-ups, game nights, and pop-up gatherings. These are the events where neighbors actually meet each other.",
      "If you have an idea for a community event, bring it to us — most of our programs started exactly that way.",
    ],
    highlights: [
      "Year-round community gatherings",
      "Organized by and for the neighborhood",
      "Open invitation — bring your own event ideas",
    ],
    fundraising:
      "Donations keep these events free: food, supplies, permits, and space rentals.",
    images: [
      { src: "", alt: "A community gathering in the park" },
      { src: "", alt: "Neighbors at a HADE community event" },
    ],
  },
];

/** Look up one program by its slug (used by the program pages) */
export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}
