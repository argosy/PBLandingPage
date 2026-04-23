# PBLandingPage

Public landing page for [pckl.bot](https://pckl.bot). Built with React + Vite + Tailwind v4.

## Build

```bash
pnpm install
pnpm build
```

Output: `dist/` (static site).

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy

Caddy on the pckl.bot droplet serves `dist/` for unauthenticated requests to `/`; authenticated requests and all API paths continue to proxy to the picklebot Python service. See `/etc/caddy/Caddyfile` on the droplet.
