/* ============================================================
   TEAM — the people shown on the About page.
   Names and titles below come from the foundation's public
   IRS filing. Edit freely; add a photo by putting a file in
   public/images/team/ and writing its path in "image".
   ============================================================ */

export type TeamMember = {
  name: string;
  role: string;
  bio: string; // a sentence or two — "" to leave blank
  image: { src: string; alt: string };
};

export const team: TeamMember[] = [
  {
    name: "Maezn G. Micael",
    role: "President",
    bio: "",
    image: { src: "", alt: "Maezn G. Micael, President" },
  },
  {
    name: "Raheal Mengisteab",
    role: "Vice President",
    bio: "",
    image: { src: "", alt: "Raheal Mengisteab, Vice President" },
  },
  {
    name: "Samrawit Micael",
    role: "Secretary",
    bio: "",
    image: { src: "", alt: "Samrawit Micael, Secretary" },
  },
  {
    name: "Selamwit Ghebrehiwet",
    role: "Chief Financial Officer",
    bio: "",
    image: { src: "", alt: "Selamwit Ghebrehiwet, CFO" },
  },
  {
    name: "Senay Tesfamariam",
    role: "Director",
    bio: "",
    image: { src: "", alt: "Senay Tesfamariam, Director" },
  },
];
