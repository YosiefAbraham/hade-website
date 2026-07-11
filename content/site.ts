/* ============================================================
   SITE-WIDE INFO — edit this file to update the basics.
   Plain text between quotes. Save the file and the site updates.
   ============================================================ */

export const site = {
  name: "HADE",
  legalName: "Hade Foundation Incorporated",
  tagline: "Us / We / Our",

  // One-sentence mission shown on the homepage and in search results
  mission:
    "Hade means “one” in Tigrinya. We are a San Diego nonprofit bringing youth and community together as one — beyond religion, politics, or background.",

  // Longer mission used on the About page
  missionLong:
    "HADE was built on a simple idea: a community is strongest when it moves as one. We organize college tours, back-to-school drives, youth sports, and community gatherings that give San Diego youth a place to belong, people to look up to, and a path forward — no matter where their family comes from or what they believe.",

  city: "San Diego, CA",
  email: "hade.sandiego@gmail.com", // TODO: replace with the real org email
  instagram: "https://www.instagram.com/hade.sandiego/",

  // Nonprofit credentials — shown in the footer and on the Donate page.
  // Grant reviewers look for these.
  ein: "85-3396650",
  taxStatus: "501(c)(3) tax-exempt nonprofit",
  rulingYear: "2021", // year the IRS granted tax-exempt status
  foundedYear: "2020", // TODO: confirm the actual founding year

  // Facts shown in the stat strip on the homepage.
  // Keep these accurate — this site supports grant applications.
  facts: [
    { value: "One", label: "“Hade” in Tigrinya" },
    { value: "2020", label: "Founded in San Diego" },
    { value: "100%", label: "Volunteer-run" },
    { value: "501(c)(3)", label: "Tax-exempt nonprofit" },
  ],

  // Impact numbers shown on the About page.
  // TODO: replace every value below with real, verifiable numbers
  // before using this site in grant applications.
  impact: [
    { value: "500+", label: "Backpacks & supply kits given out" },
    { value: "1,200+", label: "Meals prepared and delivered" },
    { value: "60+", label: "Students on college tours" },
    { value: "7", label: "Year-round programs" },
  ],

  // Ways to give — shown on the Donate page.
  // Replace "#" with real links (GoFundMe, PayPal, Zelle info page, etc.)
  donationMethods: [
    {
      name: "GoFundMe",
      description: "Give to our current campaign online.",
      url: "#", // TODO: paste the GoFundMe link here
    },
    {
      name: "Zelle",
      description: "Send directly to the foundation — no fees taken out.",
      url: "#", // TODO: link to a page or note with Zelle details
    },
    {
      name: "Mail a check",
      description: "Payable to Hade Foundation Incorporated.",
      url: "#", // TODO: link to contact page or add mailing address
    },
  ],
};
