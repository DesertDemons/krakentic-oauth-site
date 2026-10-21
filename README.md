# KrakenTic — Hermes Workspace Connector (OAuth Info Site)

A public, static, bilingual (English / Arabic) information site for a **private** Hermes Kraken → Google Workspace OAuth integration.

**Target URL:** `https://connect.krakentic.com`

**Current project stage:** Draft for owner review. **Do not publish this privacy policy as a verified account of the running integration until the review items below are confirmed.** The application is a pre-launch project and is not represented as a registered corporation.

## Repository layout

**GitHub Pages source: branch `main`, folder `/docs`.** Only the contents of `docs/` are intended to be published. Everything outside `docs/` is project documentation and is **not** part of the website.

| Path | Purpose | Published by Pages? |
|---|---|---|
| `docs/index.html`, `docs/privacy/index.html`, `docs/terms/index.html` | The three site pages | Yes |
| `docs/assets/` | Stylesheet, language-switch script, provisional mark | Yes |
| `docs/CNAME` | Custom domain `connect.krakentic.com` (must stay in the root of `docs/`) | Yes |
| `docs/.nojekyll` | Disables Jekyll processing | Yes |
| `README.md`, `REVIEW_BEFORE_PUBLISH.md`, `DEPLOY_GUIDE_AR.md` | Documentation | No |

## Pages

| Page | Local file | Target production URL |
|---|---|---|
| Home | `docs/index.html` | https://connect.krakentic.com/ |
| Privacy Policy | `docs/privacy/index.html` | https://connect.krakentic.com/privacy/ |
| Terms of Service | `docs/terms/index.html` | https://connect.krakentic.com/terms/ |

Website uses plain HTML, CSS, and local JavaScript for language switching; no framework, analytics, runtime credentials, backend, or API calls. The language selection is held locally in the browser. `docs/assets/mark.svg` is an **original provisional graphic**, not an imported or approved corporate logo. Replace it with the approved KrakenTic brand artwork if desired, before publication.

## GitHub Pages configuration (after owner approval)

1. Use the existing **public** repository `DesertDemons/krakentic-oauth-site` (a GitHub Pages *project* repository, not `DesertDemons.github.io`).
2. Merge the approved changes into `main` (only after owner approval). The website files live in `docs/` — keep `docs/privacy/`, `docs/terms/`, `docs/assets/`, `docs/.nojekyll`, and `docs/CNAME` intact, and keep documentation files outside `docs/`.
3. Open repository `Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /docs → Save`.
4. The verified GitHub account already has domain-ownership verification for `krakentic.com` per the user-provided screenshot; keep its DNS TXT verification record in Hostinger.
5. Under repository `Settings → Pages`, confirm **Custom domain** = `connect.krakentic.com`. A branch-published Pages setup reads the `CNAME` file from the root of the publishing source, which here is `docs/CNAME`; GitHub may add or update it in `docs/` when you set the domain in the UI.
6. **Only after the domain is configured in Pages**, add in authoritative Hostinger DNS:
   - Type: `CNAME`
   - Name: `connect`
   - Value: `desertdemons.github.io` (not a URL or repo path)
   - TTL: 300 or Hostinger default.
   - Do **not** alter A `@`, A `n8n`, A `dashboard`, or existing CNAME `www` records.
7. Wait for DNS/HTTPS; enable **Enforce HTTPS** under Pages when available.
8. Verify all three public URLs on HTTPS, language switch, accessibility, and that no credential/config is published.
9. Complete Google OAuth Branding with these exact live URLs, plus Google's own domain verification in Search Console if required. Authorized domain: `krakentic.com`.
10. Confirm Google's active OAuth scopes and verified privacy behavior **before** publishing. OAuth client creation and token renewal are **not** part of this website deployment.

## Existing OAuth client

As stated by the project owner (not verified by this repository), the existing Google OAuth client used by Hermes is:

- **Client type:** Desktop / Installed application
- **Client name:** Kraken Hermes v2

This repository contains no client ID, client secret, or token. Creating or changing OAuth clients and renewing tokens are **not** part of this repository's deployment task and must be handled separately, with explicit owner approval.

**Important:** This website is **not** an OAuth redirect/callback, and it must never receive Google authorization codes, tokens, credentials, or Gmail contents. Nothing in this repository requires, registers, or receives an OAuth redirect URI.

## Privacy and Google policy publication gate

See [`REVIEW_BEFORE_PUBLISH.md`](./REVIEW_BEFORE_PUBLISH.md). Main unknowns are provider-side AI processing/training settings, Hermes data storage locations, scope inventory, consent/disclosure in the actual agent application, and data retention/deletion mechanisms. The draft reflects these unknowns openly but is **not a substitute for making the real integration policy-compliant**.

## Compliance reference materials

- https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance
- https://developers.google.com/workspace/workspace-api-user-data-developer-policy
- https://developers.google.com/terms/api-services-user-data-policy
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Contact

Public support and privacy mailbox designated by project owner: `Krakenhmk@gmail.com`.
