# KrakenTic OAuth site — Pre-publication checks

Status: **Unverified draft — do not represent privacy claims as audited until checked.**

The goal is a trustworthy public OAuth information site for a private, limited-user Hermes connector, *not* a separate public Google-account login experience.

## Required factual checks

- [ ] **Scopes:** Record exact strings from Google Cloud Auth Platform → Data Access. Remove unused permissions (especially broad Gmail/Drive) and align on-page feature descriptions with actual scopes.
- [ ] **OAuth client and callbacks:** Confirm the existing **Web application** redirect URI(s) and Hermes authorization flow. Do not invent n8n OAuth callback values.
- [ ] **OpenAI processing:** Determine whether Hermes uses OpenAI API, ChatGPT interactive login, an intermediate gateway, or another provider; confirm provider agreements and model training/data sharing controls for transmitted Google data. Merely naming a model is not proof of these settings.
- [ ] **Explicit consent:** Ensure the authorized user sees an in-application explanation of Google data transfer to the AI service, **before** grant/processing as applicable. A static privacy policy alone is insufficient under Google Workspace's disclosure rules.
- [ ] **Actual data flow:** Trace one synthetic sample through Hermes → tools → external inference → conversation history, logs, memory, RAG, DB, n8n, backups. Determine where content/derivatives persist.
- [ ] **Retention and deletion:** Define/implement actual retention windows or event-based deletion; validate an account data deletion request end-to-end, including backup treatment. Current draft explicitly states no verified automated deletion schedule.
- [ ] **Secrets and permissions:** Validate token encryption and access boundaries, safe logs, secure HTTPS callback, least privileges, and prompt-injection constraints before adding real organizational data.
- [ ] **Restricted scopes / Google review:** Check whether the requested Gmail/Drive scopes require verification, whether a personal-use exception applies, and whether an assessment is required before public expansion. External / In production is **not** proof of Google approval.
- [ ] **Operator identity and contact:** Confirm public support email works and may be published. KrakenTic remains a pre-launch project until actual registration.
- [ ] **Review text:** Have the responsible operator review English and Arabic for accuracy; update `Last updated` if you make edits. Seek qualified legal review if public customers will use the product.

## Claim boundaries in this draft

1. The homepage lists **possible** integrations, not every scope as currently active.
2. The privacy policy says external OpenAI processing **may** occur and describes reported possible internal storage categories. It does not claim a fixed deletion timeline or unverified encryption.
3. The policy says KrakenTic does not intentionally sell or use Google user data for advertising/general-model training; this still requires operator confirmation and provider-side compliance.
4. **Do not** change actual OAuth client secrets, refresh tokens, n8n, VPS, Hostinger, or Google settings as part of deploying a static information site.
5. On later customer-facing use, perform a new privacy and Google restricted-scope review.

## Test acceptance

- [ ] `https://connect.krakentic.com/` returns valid HTML publicly.
- [ ] `https://connect.krakentic.com/privacy/` and `/terms/` are publicly reachable on same domain.
- [ ] Navigation, Arabic toggle / RTL, mobile layout, email links and external policy links work.
- [ ] GitHub Pages HTTPS certificate is valid, HTTPS is enforced, no mixed content.
- [ ] Repository is public but contains **only** approved static files; no secrets.
- [ ] Google OAuth Branding matches the public URLs exactly.
- [ ] Hermes is reauthorized **separately**, and actual Google service operations plus token refresh are verified.
