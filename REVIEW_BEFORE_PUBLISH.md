# KrakenTic OAuth site — Pre-publication checks

Status: **Unverified draft — NOT APPROVED FOR PUBLICATION. Do not represent privacy claims as audited until the gates below are closed.**

The goal is a trustworthy public OAuth information site for a private, limited-user Hermes connector, *not* a separate public Google-account login experience.

## Runtime facts supplied by the owner

Reported as verified by the project owner from the running Hermes Kraken environment (as supplied for the 21 October 2026 revision of the pages). This repository cannot independently re-verify them. Software version and model identifiers are intentionally not recorded in this public repository.

- Existing OAuth client: **Desktop / Installed application**, name **Kraken Hermes v2** (owner-reported; not shown on the public pages).
- AI provider: `openai-codex`, authenticated with **Codex OAuth**. No fallback provider is configured.
- Automatic Kraken Memory capture is **disabled**. Explicitly approved memory claims may persist; Kraken Memory encrypts approved claims using Fernet.
- Google tool results may enter the model context and the persistent session history (`state.db`). **Automatic session pruning is disabled.**
- Logs, caches and local operational files may contain Google-derived information.
- Credential files have restrictive permissions. Encryption at rest is **not fully verified**.
- The owner reports having turned off ChatGPT model training. Whether that setting applies to this third-party OAuth integration is **not verified**.
- **Not verified:** end-to-end deletion; mandatory human approval for all consequential actions; in-product Google data-transfer consent.

## Publication gates (all open)

None of these is a guarantee. Each gate stays open until it is verified, and the privacy and terms text must then be updated to match what was verified, not what was hoped.

- [ ] **Scopes:** Record the exact strings shown in Google Cloud Auth Platform → Data Access and compare them with the eight scopes the code reportedly requests (owner-reported, not verified here: `gmail.readonly`, `gmail.send`, `gmail.modify`, `calendar`, `drive`, `contacts.readonly`, `spreadsheets`, `documents`). Remove unused or redundant permissions (especially broad Gmail/Drive) and align the privacy page section "Google data we may access" with the final list.
- [ ] **OAuth client and authorization flow:** Confirm the existing OAuth client matches the owner-reported details (type Desktop / Installed application, name Kraken Hermes v2) and document the authorization flow Hermes actually uses, including where its refresh token is stored. Do not register or invent redirect URIs for this website or for n8n.
- [ ] **AI provider data use:** Verify whether the ChatGPT training setting the owner turned off applies to Codex OAuth traffic from this third-party integration, and what OpenAI retains. Until verified, the policy must not state that model training is disabled or give a retention period. A different route with documented no-training terms is an owner decision.
- [ ] **In-product consent:** Ensure the authorized user sees an in-application disclosure of the Google data transfer to the AI service, with an affirmative action, **before** Google authorization and before Google content is sent to the provider. A static privacy policy alone is insufficient under Google Workspace's disclosure rules.
- [ ] **Human approval of consequential actions:** Verify, or technically enforce, explicit human approval before sending email, deleting or sharing files, and creating, changing or deleting events. Until verified, the policy must not state that approval is mandatory.
- [ ] **Retention and deletion:** Define actual retention windows or event-based deletion; enable and test session pruning if chosen; validate an account data deletion request end-to-end across session history, logs, caches, memory entries, backups and provider-side copies. The policy must not state any automatic deletion period until one is verified.
- [ ] **Encryption at rest:** Verify for the session database, logs, caches, backups and credentials. Until then, the policy must not claim universal encryption at rest.
- [ ] **Other stores:** Verify whether any other agent memory or skill stores, server backups, or n8n execution data hold Google-derived content. The privacy page currently says this has not been verified for other memory or skill stores and for backups; it does not mention n8n execution data, so decide whether it must be added once verified.
- [ ] **User separation:** Verify that session history, logs, memory and caches are kept separate per authorized account, so one authorized user's Google-derived content cannot be read or used in another user's session. The pages do not claim separation.
- [ ] **Memory approval:** Document who approves memory claims, how approval is recorded, and how an approved claim is deleted. The pages state only that approved claims may persist until deleted, and that the deletion procedure is not verified.
- [ ] **Changes in use:** Decide how authorized users will be told, and asked for consent where required, before Google data is used for a new purpose, shared with a new recipient, or sent to a different AI provider. The privacy page must not promise a notice process until one exists.
- [ ] **Human access to stored data:** Document who may read session history, logs and memory, and when. Google's Limited Use rules restrict human reading of user data to listed cases (for example documented user consent, security, legal compliance).
- [ ] **Secrets and permissions:** Validate token handling and access boundaries, safe logs, secure transport for any network endpoint Hermes exposes, least privileges, and prompt-injection constraints before adding real organizational data.
- [ ] **Restricted scopes / Google review:** Determine the consent-screen publishing status, user type and the real user population. Check whether the requested Gmail/Drive scopes require verification and a security assessment, whether a personal-use exception applies, and whether the application qualifies for the restricted-scope use cases. Assess against both the Google API Services User Data Policy (Limited Use) and the Google Workspace User Data and Developer Policy. External / In production is **not** proof of Google approval. No affirmative statement of Limited Use compliance may be published until this is resolved.
- [ ] **Operator commitments in the policy:** The operator confirms that Google user data is not sold, is not used for advertising, and that KrakenTic does not itself train or fine-tune AI models on it. The policy makes no statement about what OpenAI does with submitted content. The operator also confirms that the support mailbox is monitored, that privacy and deletion requests will be answered, and that locations of Google-derived data will be verified and retention implemented and tested before use broadens beyond the private pilot.
- [ ] **Operator identity and contact:** Confirm and publish the operator's legal name and registration status, confirm the public support email works and may be published, and align the OAuth consent-screen app name, logo and links with this site. The privacy page tells users to revoke the entry whose name matches the consent-screen application name, so that name must be recognizable to them. KrakenTic remains a pre-launch project until actual registration.
- [ ] **Review text:** Have the responsible operator review the English and the formal Arabic for accuracy; update `Last updated` if you make edits. Seek qualified legal review if public customers will use the product.
- [ ] **Owner decisions on presentation:** search-engine indexing (`robots`), the provisional `mark.svg`, infrastructure detail in the public repository documentation, and the colloquial Arabic wording that remains on the homepage (not part of this update).

## Claim boundaries in this draft

1. The homepage lists **possible** integrations, not every scope as currently active.
2. The privacy page states that Google content may be sent to OpenAI (Codex route, Codex OAuth, no fallback provider); that tool results may enter the model context and may be stored in persistent session history, with automatic pruning disabled; that logs, caches and local files may hold Google-derived data; that automatic Kraken Memory capture is disabled, that approved memory claims may persist until deleted, and that Kraken Memory encrypts approved memory claims (Fernet; this does not extend to any other store); and that no verified deletion schedule exists.
3. The policy deliberately does **not** assert: verified compliance with Google's Limited Use requirements; universal encryption at rest; automatic deletion after 90 days or any other period; that Google content never leaves the server; that model training is disabled for this Codex OAuth route; or that all consequential actions require mandatory human approval.
4. The policy says KrakenTic does not sell Google user data or use it for advertising, and does not itself train or fine-tune AI models on it (an operator-only statement; nothing is said about OpenAI). These are operator commitments that still require operator confirmation (see gates).
5. **Do not** change actual OAuth client secrets, refresh tokens, n8n, VPS, Hostinger, or Google settings as part of deploying a static information site.
6. On later customer-facing use, perform a new privacy and Google restricted-scope review.

## Test acceptance

- [ ] `https://connect.krakentic.com/` returns valid HTML publicly.
- [ ] `https://connect.krakentic.com/privacy/` and `/terms/` are publicly reachable on same domain.
- [ ] Navigation, Arabic toggle / RTL, mobile layout, email links and external policy links work.
- [ ] GitHub Pages HTTPS certificate is valid, HTTPS is enforced, no mixed content.
- [ ] The published `docs/` folder contains **only** approved static files; no secrets anywhere in the public repository.
- [ ] Google OAuth Branding matches the public URLs exactly.
- [ ] The hosting statements on the privacy page (a static site served from GitHub Pages at connect.krakentic.com, separate from the Connector's runtime environment) are true at go-live.
- [ ] Hermes is reauthorized **separately**, and actual Google service operations plus token refresh are verified.
