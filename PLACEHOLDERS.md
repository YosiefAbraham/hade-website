# Photo placeholder numbers

Every empty photo slot on the site shows a big number in the middle of its
striped box. Those numbers are permanent, so you can walk the site, note the
numbers you have photos for, and just say **"replace photo 27 with this
picture"** — no need to describe where it is.

The number disappears automatically as soon as a real photo is dropped in.

## The full list

| # | Where it appears | What belongs there | Edit in |
| --- | --- | --- | --- |
| 1 | Home — hero, next to "Us. We. Our." | Best wide shot of the community: youth and volunteers together | `app/page.tsx` |
| 2 | Home — "Who we are", left of the pair | Youth at a HADE event (tall/portrait) | `app/page.tsx` |
| 3 | Home — "Who we are", right of the pair | Volunteers at work (tall/portrait) | `app/page.tsx` |
| 4 | Home — mosaic, large lead tile | Big group photo of the whole community | `app/page.tsx` |
| 5 | Home — mosaic, small tile | Youth basketball game moment | `app/page.tsx` |
| 6 | Home — mosaic, small tile | Volunteers at the supply drive | `app/page.tsx` |
| 7 | Home — mosaic, small tile | Students on the college tour | `app/page.tsx` |
| 8 | Home — mosaic, small tile | Friends Giving table | `app/page.tsx` |
| 9 | About — "Our story", top | The founding group | `app/about/page.tsx` |
| 10 | About — "Our story", bottom | An early community event | `app/about/page.tsx` |
| 11 | About — full-width band above the team | Everyone together; very wide group photo | `app/about/page.tsx` |
| 12 | Apply — photo strip, left | A student on the college tour | `app/apply/page.tsx` |
| 13 | Apply — photo strip, middle | Basketball season in action | `app/apply/page.tsx` |
| 14 | Apply — photo strip, right | Volunteers on event day | `app/apply/page.tsx` |
| 15 | Contact — below "Based in" | The team at a community event | `app/contact/page.tsx` |
| 16 | Donate — "Ways to give" | What donations become: backpacks, meals, bus seats | `app/donate/page.tsx` |
| 17 | About — timeline, 2018 | Early gathering, 2018 | `content/history.ts` |
| 18 | About — timeline, 2019 | Community event, 2019 | `content/history.ts` |
| 19 | About — timeline, 2020 | The founding team, 2020 | `content/history.ts` |
| 20 | About — timeline, 2021 | Celebrating 501(c)(3) status, 2021 | `content/history.ts` |
| 21 | About — timeline, Today | The community today | `content/history.ts` |
| 22 | About — team grid | Maezn G. Micael, President | `content/team.ts` |
| 23 | About — team grid | Raheal Mengisteab, Vice President | `content/team.ts` |
| 24 | About — team grid | Samrawit Micael, Secretary | `content/team.ts` |
| 25 | About — team grid | Selamwit Ghebrehiwet, CFO | `content/team.ts` |
| 26 | About — team grid | Senay Tesfamariam, Director | `content/team.ts` |
| 27 | Past Events + Home | Back to School BBQ, August 2025 | `content/events.ts` |
| 28 | Past Events + Home | College Tour, Spring 2025 | `content/events.ts` |
| 29 | Past Events + Home | Friends Giving, November 2024 | `content/events.ts` |
| 30 | Past Events | Feed the Homeless drive, Winter 2024 | `content/events.ts` |
| 31 | Past Events | Youth Basketball, 2024–2025 season | `content/events.ts` |
| 32 | Past Events | College Prep workshop night, Fall 2024 | `content/events.ts` |
| 33 | College Tour — main photo (also its card) | Students on a university campus | `content/programs.ts` |
| 34 | College Tour — second photo | Group photo at a college entrance | `content/programs.ts` |
| 35 | College Tour — third photo | Students in a campus lecture hall | `content/programs.ts` |
| 36 | College Prep — main photo (also its card) | A mentor helping a student with an application | `content/programs.ts` |
| 37 | College Prep — second photo | Students at a prep workshop | `content/programs.ts` |
| 38 | Back to School BBQ — main photo (also its card) | Tables of backpacks ready to hand out | `content/programs.ts` |
| 39 | Back to School BBQ — second photo | Families at the barbecue | `content/programs.ts` |
| 40 | Back to School BBQ — third photo | Volunteers packing supply kits | `content/programs.ts` |
| 41 | Friends Giving — main photo (also its card) | The dinner table | `content/programs.ts` |
| 42 | Friends Giving — second photo | Volunteers serving food | `content/programs.ts` |
| 43 | Feed the Homeless — main photo (also its card) | Volunteers preparing meals | `content/programs.ts` |
| 44 | Feed the Homeless — second photo | Packed meals ready for delivery | `content/programs.ts` |
| 45 | Youth Basketball — main photo (also its card) | The team on the court | `content/programs.ts` |
| 46 | Youth Basketball — second photo | A game in progress | `content/programs.ts` |
| 47 | Youth Basketball — third photo | Team huddle with coaches | `content/programs.ts` |
| 48 | Community Events — main photo (also its card) | A gathering in the park | `content/programs.ts` |
| 49 | Community Events — second photo | Neighbors at a community event | `content/programs.ts` |

"Also its card" means that photo doubles as the program's thumbnail on the
homepage and the Programs page, so one photo fills several spots at once.

## Filling one in yourself

1. Put the photo in the matching folder under `public/images/`
   (`programs/`, `events/`, `team/`, or `general/`).
2. Find the slot by its number and fill in `src`:

```
image: { slot: 27, src: "/images/events/bbq-2025.jpg", alt: "Back to school barbecue 2025" },
```

Leave `slot` and `alt` alone — only `src` needs to change. See EDITING.md for
the full guide.
