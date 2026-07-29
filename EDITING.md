# How to update the HADE website (no coding needed)

Almost everything you'd ever want to change lives in **two places**:

| What you want to change | Where |
| --- | --- |
| Text (mission, programs, events, team, applications) | the `content/` folder |
| Photos | the `public/images/` folder |

You never need to touch `app/` or `components/` for everyday updates.

---

## 1. Changing text

Open the `content/` folder. There are five files, each plain text:

- **`site.ts`** — org name, tagline, mission, email, EIN, donation links, homepage facts, impact numbers
- **`programs.ts`** — every program: name, description, bullet points, fundraising blurb
- **`events.ts`** — the Past Events gallery (newest at the top)
- **`team.ts`** — board members shown on the About page
- **`apply.ts`** — the applications on the Apply page
- **`history.ts`** — the year-by-year timeline on the About page

Edit only the words **between quotation marks**. Example:

```
tagline: "Us / We / Our",
           ^^^^^^^^^^^^ change this part only
```

Rules of thumb:
- Don't delete the quotes, commas, or brackets.
- To add a new event or program, copy an existing block from `{` to `},` and edit it.
- Anything marked `TODO:` is waiting on real info (donation links, form links, email).

## 2. Adding photos

1. Put your photo in the right folder inside `public/images/`:
   - `public/images/programs/` — program photos
   - `public/images/events/` — past event photos
   - `public/images/team/` — headshots
   - `public/images/general/` — homepage/about photos
2. In the matching content file, find the image entry and write the path:

```
image: { src: "/images/events/bbq-2025.jpg", alt: "Back to school barbecue 2025" },
```

Where you see `src: ""` today, the site shows a striped placeholder labeled
with what photo belongs there — walk the site to see exactly which photos
are needed.

Photo tips:
- Use `.jpg` files under ~500 KB when you can (export from your phone is fine —
  the site automatically resizes and compresses them for visitors).
- Filenames: lowercase, dashes instead of spaces, e.g. `friends-giving-2025.jpg`.
- `alt` is a short description read aloud to blind visitors — always fill it in.

## 3. Before using this site in grant applications

Search the `content/` folder for `TODO:` and resolve each one. In particular:

- **`site.ts` → `impact`** — the impact numbers are placeholders. Replace them
  with real, verifiable numbers.
- **`site.ts` → `donationMethods`** — paste real donation links.
- **`site.ts` → `email`** — confirm the org email.
- **`apply.ts` → `formUrl`** — create a free Google Form per application and
  paste its link.

## 4. Publishing changes

The site is deployed on Vercel. Once the project is connected to GitHub,
publishing is:

```
git add -A
git commit -m "Update content"
git push
```

Vercel rebuilds and publishes automatically within a couple of minutes.

## 5. Running the site on your computer (optional)

```
npm install     (first time only)
npm run dev     then open http://localhost:3000
```
