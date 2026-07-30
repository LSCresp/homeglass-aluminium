# HomeGlass Aluminium — Website & Digital Business Cards

Client website for **HomeGlass Aluminium**, a Brazilian premium aluminium and glass fabricator. Beyond the marketing site, it doubles as the company's sales-enablement tool: every field representative gets a shareable digital business card that drops straight into a prospect's phone contacts.

**Live:** https://homeglassaluminium.netlify.app · **Stack:** Next.js (App Router) · TypeScript · Tailwind CSS

---

## Why it exists

HomeGlass sells through field representatives who meet clients on site — construction sites, showrooms, architects' offices. Two problems came out of that:

1. Paper business cards get lost, and a rep who changes number leaves dead cards in circulation.
2. Prospects want to see finished work before they'll talk price.

So the site carries a portfolio gallery, and each rep gets a personal card at `/cartao/<slug>` — one link to send over WhatsApp that shows who they are, what the company does, and installs itself into the phone's address book with one tap.

## Features

- **Marketing site** — hero, services, differentiators, packages, social proof and a contact form, as composable components under `src/components/`.
- **Portfolio gallery** (`/portfolio`) — finished projects driven by `src/data/portfolio.json`, so adding work is a data edit, not a code change.
- **Per-representative digital cards** (`/cartao/<slug>`) — individual phone and WhatsApp per rep; company-level data (logo, service areas, Instagram, email, site) stays in one place and propagates to every card.
- **One-tap contact download** — each card exposes a generated `contato.vcf` that phones import natively.
- **Institutional card** (`/cartao`) — same layout falling back to the company's main number, for use when no specific rep owns the lead.

## Architecture notes

### Single source of truth, two levels

Company data lives in `CONTATO` (`src/components/CartaoDigital.tsx`); per-person data lives in `REPRESENTANTES` (`src/data/representantes.ts`). Change the Instagram handle once and all cards update. Onboarding a rep is one array entry plus a push; offboarding is deleting the line, after which the URL 404s — which is the point, since a stale card in a client's WhatsApp history should stop resolving rather than route to someone who left.

### Static generation of a dynamic-looking route

Both the card pages and their vCards are fully prerendered at build time:

```ts
export function generateStaticParams() {
  return REPRESENTANTES.map((r) => ({ vendedor: r.slug }));
}
export const dynamic = "force-static";
export const dynamicParams = false;
```

`dynamicParams = false` is deliberate — any slug not in the list 404s at the edge instead of invoking a function. The whole site ships as static assets on a CDN: no server, no cold starts, and a card link opens instantly on a phone with poor signal on a building site.

### vCard quirks

`contato.vcf/route.ts` strips diacritics via `normalize("NFD")` before writing the card. vCard 3.0 accent handling is unreliable on older Android address books, and a contact that imports as mojibake is worse than one imported without an accent. Phone numbers are reformatted from the stored digits-only form (`5514991619177`) into `+55 14 99161-9177`, which phone dialers parse reliably.

## Project structure

```
src/
├── app/
│   ├── page.tsx                          # marketing home
│   ├── portfolio/page.tsx                # gallery
│   └── cartao/
│       ├── page.tsx                      # institutional card
│       └── [vendedor]/
│           ├── page.tsx                  # per-rep card
│           └── contato.vcf/route.ts      # generated vCard
├── components/                           # Hero, Services, CartaoDigital, …
└── data/
    ├── portfolio.json                    # portfolio entries
    └── representantes.ts                 # sales reps
```

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Opens on http://localhost:3000.

## Adding a sales representative

Append to `REPRESENTANTES` in `src/data/representantes.ts` and push — Netlify rebuilds and the card goes live.

```ts
{ slug: "joao-silva", nome: "João Silva", cargo: "Representante de Vendas", telefone: "5514999999999" }
```

Slugs are lowercase, unaccented, hyphenated (they are the public URL). Phone numbers are digits only, starting with country code `55`. Set `whatsapp` only when it differs from the calling number.

## Deployment

Netlify, automatic builds from `main`.

---

Built and maintained by [Leonardo Serra Crespilho](https://www.linkedin.com/in/leonardocrespilho/).
