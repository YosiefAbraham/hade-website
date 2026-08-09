# HADE Foundation Website

The official website of **Hade Foundation Incorporated** — a San Diego
501(c)(3) youth & community nonprofit (EIN 85-3396650). *Hade* means
"one" in Tigrinya; the tagline is **Us / We / Our**.

The site exists to present the foundation's programs, history, and
impact — especially to **grant reviewers and donors** — and to give
students and volunteers a place to apply.

> **Just here to change text or photos?** Read
> **[EDITING.md](EDITING.md)** instead — it's the short, no-code guide.
> This README is the full map of how everything works.

---

## 1. What this is built with

| Piece | What it does |
| --- | --- |
| [Next.js 16](https://nextjs.org) | The web framework. Every page is pre-rendered to static HTML at build time, so the live site is fast and nothing runs on a server. |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling. Design tokens (colors, fonts) are defined once in `app/globals.css`. |
| TypeScript | The content files are typed, so a typo (like a missing quote) is caught before the site builds. |
| [Vercel](https://vercel.com) | Hosting. Pushing to the GitHub repo automatically rebuilds and publishes the site. |

No database, no CMS, no backend — **all content lives in files in this
folder**, which is what makes the site cheap (free) to host and simple
to maintain.

## 2. Running it on your computer

You need [Node.js](https://nodejs.org) 18+ installed. Then, in this folder:

```bash
npm install     # first time only — downloads dependencies
npm run dev     # starts the site at http://localhost:3000
```

Leave `npm run dev` running while you edit; the browser refreshes
automatically on every save. Before publishing big changes it's worth
running:

```bash
npm run build   # full production build; fails loudly if something is broken
```

## 3. How the folders tie together

```
hade-website/
│
├── content/          ← ✏️ ALL WORDS LIVE HERE (edit these freely)
│   ├── site.ts          org info, mission, tagline, EIN, email, donation links,
│   │                    homepage facts, impact numbers
│   ├── programs.ts      the 7 programs (name, story, bullets, fundraising, photos)
│   ├── events.ts        Past Events gallery entries (newest first)
│   ├── team.ts          board members on the About page
│   ├── apply.ts         applications on the Apply page (+ their Google Form links)
│   └── history.ts       the year-by-year timeline on the About page
│
├── public/images/    ← 🖼 ALL PHOTOS LIVE HERE
│   ├── programs/  events/  team/  general/    (drop photos in, reference them
│   │                                           from the content files)
│   └── logo/            the processed logo files (black, white, favicon)
│
├── app/              ← the pages themselves (one folder = one page)
│   ├── layout.tsx       wraps every page: fonts, header, footer, browser-tab titles
│   ├── globals.css      design tokens: the black/white palette, typefaces, shared styles
│   ├── page.tsx         homepage            →  yoursite.org/
│   ├── about/           About + history + team →  /about
│   ├── programs/        program hub         →  /programs
│   │   └── [slug]/      each program's page →  /programs/college-tour, etc.
│   │                    (pages are generated automatically from content/programs.ts —
│   │                     add a program to that file and its page just appears)
│   ├── events/          past events gallery →  /events
│   ├── donate/          ways to give        →  /donate
│   ├── apply/           applications        →  /apply
│   ├── contact/         contact + grantmaker facts → /contact
│   ├── not-found.tsx    the branded 404 page
│   └── icon.png         the browser-tab icon (the "1H" mark)
│
├── components/       ← reusable building blocks the pages are assembled from
│   ├── Header.tsx       sticky black nav bar + mobile hamburger menu
│   ├── Footer.tsx       footer with links + nonprofit info (EIN etc.)
│   ├── Logo.tsx         the HADE logo (white or black variant)
│   ├── Photo.tsx        ⭐ every image on the site goes through this — if a
│   │                    photo's src is "" it shows a labeled placeholder instead
│   ├── PhotoMosaic.tsx  the 5-photo grid on the homepage
│   ├── ProgramCard.tsx  the program tiles on home + programs pages
│   ├── PageHero.tsx     the black title banner on top of inner pages
│   └── CTA.tsx          buttons + the black "Donate" band at page bottoms
│
├── scripts/
│   └── process-logo.mjs   regenerates the logo assets from a raw image file
│                          (run: node scripts/process-logo.mjs path/to/logo.png)
│
├── EDITING.md        ← the quick guide for everyday text/photo updates
└── README.md         ← you are here
```

**The flow in one sentence:** pages in `app/` import words from
`content/` and photos from `public/images/`, and assemble them using the
building blocks in `components/` — so everyday updates never touch
`app/` or `components/` at all.

## 4. The design system (for anyone restyling)

Everything visual is controlled from two small places:

- **`app/globals.css`** — the design tokens. The palette is deliberately
  black & white only (`--color-ink`, `--color-paper`, plus 3 grays).
  Change a hex value here and the entire site follows. The signature
  styles also live here: `.display` (varsity headlines), `.eyebrow`
  (small uppercase labels), `.tape` (the diagonal-stripe divider),
  `.placeholder-stripes` (empty photo slots).
- **`app/layout.tsx`** — the two typefaces, loaded via `next/font`
  (self-hosted at build time): **Anton** for headlines, **Work Sans**
  for body text.

The logo: `components/Logo.tsx` renders pre-processed transparent PNGs
from `public/images/logo/`. If you ever get a better/vector logo file,
run `node scripts/process-logo.mjs <file>` to regenerate all versions
(including the favicon) in one shot.

## 5. Deploying to Vercel (step by step)

The site is 100% static — it deploys on Vercel's **free tier** with
zero configuration.

**One-time setup (about 10 minutes):**

1. Create a repository on [GitHub](https://github.com/new) (e.g.
   `hade-website`, can be private).
2. In this folder, connect and push (this folder is already a git repo
   with full history):

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/hade-website.git
   git push -u origin main
   ```

3. Go to [vercel.com/new](https://vercel.com/new), sign in **with
   GitHub**, and import the `hade-website` repository.
4. Change nothing on the import screen — Vercel auto-detects Next.js.
   Click **Deploy**. Two minutes later you have a live URL like
   `hade-website.vercel.app`.
5. **Custom domain:** Vercel project → Settings → Domains → add your
   domain (e.g. `hadefoundation.org`) and follow the DNS instructions
   it shows for your registrar. HTTPS is automatic.

**Publishing every change after that:**

```bash
git add -A
git commit -m "Describe what you changed"
git push
```

Vercel rebuilds and the live site updates in ~2 minutes. If a build
fails (e.g. a typo in a content file), the live site **stays on the
last working version** — broken changes never go live, and Vercel
emails you the error.

## 6. Checklist before using this site in grant applications

Search the `content/` folder for `TODO:` — each one marks a spot
waiting on real information:

- [ ] `site.ts` → `email` — confirm the real org email
- [ ] `site.ts` → `impact` — replace placeholder impact numbers with
      real, verifiable figures (grant reviewers check)
- [ ] `site.ts` → `donationMethods` — paste real GoFundMe/Zelle/etc. links
- [ ] `site.ts` → `foundedYear` — confirm (currently set to 2020)
- [ ] `apply.ts` → `formUrl` — create a free Google Form per application
      and paste each link
- [ ] `content/history.ts` — check the timeline facts and years
- [ ] Photos — every striped placeholder on the site is labeled with the
      photo that belongs there; drop files into `public/images/` and add
      their paths in the content files
- [ ] If photos show minors, confirm you have photo releases on file

## 7. Facts baked into the site (verify once)

These came from the foundation's public IRS filing and are shown on the
About, Contact, Donate, and footer areas — all editable in
`content/site.ts` and `content/team.ts`:

- Legal name: Hade Foundation Incorporated · EIN 85-3396650
- 501(c)(3) tax-exempt, IRS ruling year 2021
- Board: Maezn G. Micael (President), Raheal Mengisteab (VP),
  Samrawit Micael (Secretary), Selamwit Ghebrehiwet (CFO),
  Senay Tesfamariam (Director) — all volunteer, uncompensated
