# Softtek x SpaceXAI

Passworded site. Grok Bot from SpaceXAI, for Softtek sellers and delivery leads.

## What it is

Three sample GTM jobs on one page. Each job has a short problem statement, an interactive Grok Bot demo, and the matching product clips under that demo. Below that: a comparison table and the public Grok Bot quote wall.

The stack is Next 15.5.24, React 19.1, geist, and vgpu hero telemetry. Architecture stays `src/`, with data-driven scene frames, chat on the left, and the bot computer on the right. The last storyboard frame is the artifact.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run build
```

Default password is `land2expand` (override with `SITE_PASSWORD`). Do not run a long-lived dev server unless you need it.

## Product clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Deploy

Preview only. Project name `softtek-gtm`. Set `SITE_PASSWORD=land2expand`.
