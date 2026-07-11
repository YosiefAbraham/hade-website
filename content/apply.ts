/* ============================================================
   APPLICATIONS — what's open right now, shown on the Apply page.
   The easiest setup: make a free Google Form for each application
   and paste its link into "formUrl". Set "open" to false to show
   it as closed without deleting it.
   ============================================================ */

export type Application = {
  title: string;
  who: string; // who can apply
  description: string;
  deadline: string; // e.g. "March 1, 2026" or "Rolling"
  open: boolean;
  formUrl: string; // TODO: paste the Google Form link here
};

export const applications: Application[] = [
  {
    title: "College Tour — Student Application",
    who: "San Diego high school students",
    description:
      "Apply to join this year's college tour. No GPA cutoff — we're looking for curiosity, not a transcript. Transportation, lodging, and meals are fully covered.",
    deadline: "Rolling — apply any time",
    open: true,
    formUrl: "#",
  },
  {
    title: "Youth Basketball — Player Signup",
    who: "Youth, elementary through high school",
    description:
      "Sign up to play in the upcoming season. Jerseys, equipment, and gym time are covered by the foundation.",
    deadline: "Before the season starts",
    open: true,
    formUrl: "#",
  },
  {
    title: "Volunteer With Us",
    who: "Anyone 16+ who wants to give time",
    description:
      "Coaches, mentors, cooks, drivers, event hands — every program runs on volunteers. Tell us what you're good at and we'll find you a spot.",
    deadline: "Rolling — always open",
    open: true,
    formUrl: "#",
  },
];
