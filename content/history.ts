/* ============================================================
   HISTORY TIMELINE — shown on the About page.
   One entry per milestone, oldest first.
   Grant applications often ask for org history — keep this real.
   ============================================================ */

export type Milestone = {
  year: string;
  title: string;
  text: string;
  // src "" = placeholder; `slot` is the number printed on that placeholder
  image: { slot: number; src: string; alt: string };
};

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "It starts as a group of friends",
    text: "Before there was a foundation, there was a crew of friends from the community organizing gatherings, game nights, and gym runs for the younger kids. No name, no paperwork — just people showing up.",
    image: { slot: 17, src: "", alt: "Early HADE gathering, 2018" },
  },
  {
    year: "2019",
    title: "The first big events",
    text: "The first organized events take shape — community dinners, youth sports runs, and the gatherings that would become our annual traditions.",
    image: { slot: 18, src: "", alt: "Community event, 2019" },
  },
  {
    year: "2020",
    title: "HADE becomes a foundation",
    text: "The crew makes it official: Hade Foundation Incorporated is born, named after the Tigrinya word for “one.” The mission is written down for the first time — one community, beyond religion or politics.",
    image: { slot: 19, src: "", alt: "The founding team, 2020" },
  },
  {
    year: "2021",
    title: "501(c)(3) recognized",
    text: "The IRS grants tax-exempt status, opening the door to grants, tax-deductible donations, and bigger programming.",
    image: { slot: 20, src: "", alt: "Celebrating nonprofit status, 2021" },
  },
  {
    year: "Today",
    title: "One team, one dream",
    text: "Seven year-round programs: college tours, college prep, back-to-school drives, Friends Giving, feed-the-homeless runs, youth basketball, and the community events that hold it all together.",
    image: { slot: 21, src: "", alt: "The HADE community today" },
  },
];
