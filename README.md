# KrakenTic — Hermes Workspace Connector (OAuth Info Site)

A public, static, bilingual (English / Arabic) information site for a **private** Hermes Kraken → Google Workspace OAuth integration.

**Target URL:** `https://connect.krakentic.com`

**Current project stage:** Draft for owner review. **Do not publish this privacy policy as a verified account of the running integration until the review items below are confirmed.** The application is a pre-launch project and is not represented as a registered corporation.

## Pages

| Page | Local file | Target production URL |
|---|---|---|
| Home | `index.html` | https://connect.krakentic.com/ |
| Privacy Policy | `privacy/index.html` | https://connect.krakentic.com/privacy/ |
| Terms of Service | `terms/index.html` | https://connect.krakentic.com/terms/ |

Website uses plain HTML, CSS, and local JavaScript for language switching; no framework, analytics, runtime credentials, backend, or API calls. The language selection is held locally in the browser. `assets/mark.svg` is an **original provisional graphic**, not an imported or approved corporate logo. Replace it with the approved KrakenTic brand artwork if desired, before publication.

## GitHub Pages configuration (after owner approval)

1. Create a **public** repository under `DesertDemons`, suggested `krakentic-oauth-site` (a GitHub Pages *project* repository, not `DesertDemons.github.io`).
2. Upload **the contents of this directory** to the **repository root** — keep `privacy/`, `terms/`, `assets/`, `.nojekyll`, and `CNAME` intact.
3. Open repository `Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save`.
4. The verified GitHub account already has domain-ownership verification for `krakentic.com` per the user-provided screenshot; keep its DNS TXT verification record in Hostinger.
5. Under repository `Settings → Pages`, confirm **Custom domain** = `connect.krakentic.com`. A branch-published Pages setup will use the root `CNAME` file; GitHub can write or update it when you set the domain in the UI.
6. **Only after the domain is configured in Pages**, add in authoritative Hostinger DNS:
   - Type: `CNAME`
   - Name: `connect`
   - Value: `desertdemons.github.io` (not a URL or repo path)
   - TTL: 300 or Hostinger default.
   - Do **not** alter A `@`, A `n8n`, A `dashboard`, or existing CNAME `www` records.
7. Wait for DNS/HTTPS; enable **Enforce HTTPS** under Pages when available.
8. Verify all three public URLs on HTTPS, language switch, accessibility, and that no credential/config is published.
9. Complete Google OAuth Branding with these exact live URLs, plus Google's own domain verification in Search Console if required. Authorized domain: `krakentic.com`.
10. Confirm Google's active OAuth scopes, actual Web-client authorized redirect URI and verified privacy behavior **before** publishing and reauthorizing the Google OAuth client.

**Important:** This website is **not** an OAuth redirect/callback, and it must never receive Google authorization codes, tokens, credentials, or Gmail contents. Preserve the actual Hermes callback URI; n8n workflow webhooks are different from OAuth callback endpoints.

## Privacy and Google policy publication gate

See [`REVIEW_BEFORE_PUBLISH.md`](./REVIEW_BEFORE_PUBLISH.md). Main unknowns are provider-side AI processing/training settings, Hermes data storage locations, scope inventory, consent/disclosure in the actual agent application, and data retention/deletion mechanisms. The draft reflects these unknowns openly but is **not a substitute for making the real integration policy-compliant**.

## Compliance reference materials

- https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance
- https://developers.google.com/workspace/workspace-api-user-data-developer-policy
- https://developers.google.com/terms/api-services-user-data-policy
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Contact

Public support and privacy mailbox designated by project owner: `Krakenhmk@gmail.com`.
