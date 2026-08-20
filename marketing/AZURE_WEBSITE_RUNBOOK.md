# Connect Payroll public website — Azure deployment runbook

## Authoritative resources

- Source: `connectitsamoa/connect-payroll-website`, branch `main`, directory `marketing/`.
- Azure resource group: `rg-connect-payroll-public-aue`.
- Azure Static Web App: `connect-payroll-public` (Free plan, East Asia control region; static content is globally distributed).
- Azure default host: `brave-pebble-07f10c400.7.azurestaticapps.net`.
- Public domains: `connectpayroll.ws` and `www.connectpayroll.ws`.
- Authenticated payroll application: `https://app.connectpayroll.ws` (separate Azure App Service; not part of this website deployment).

## Release process

1. Make website changes on a branch and preview `marketing/` locally.
2. Confirm internal links, public contact addresses, legal pages, responsive layout and accessibility.
3. Open a pull request to `main` and wait for review.
4. A push to `main` runs `.github/workflows/deploy-marketing.yml`.
5. The workflow validates the bounded static artifact and deploys only `marketing/` using the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN`.
6. Verify the Azure default host and both custom domains after deployment.

## Required post-deployment checks

All of these pages must return HTTPS 200 and show Connect Payroll content:

- `/`
- `/privacy.html`
- `/terms.html`
- `/security.html`
- `/support.html`

Also confirm:

- the home page contains the reviewed Core and Plus pricing;
- Privacy, Terms, Security and Help links work;
- Sign in points to `https://app.connectpayroll.ws`;
- HTTPS is valid without a browser warning;
- the security headers in `staticwebapp.config.json` are present;
- no customer or payroll data is included in the static artifact.

## DNS and certificate boundary

Azure validates ownership with DNS and automatically provisions and renews HTTPS certificates. At Namecheap, preserve all Microsoft 365 MX/TXT/CNAME records and the `app` CNAME. Only the public website records for `@` and `www`, plus Azure's `_dnsauth` validation records, belong to this deployment.

Expected routing after cutover:

- `@` — Namecheap ALIAS to `brave-pebble-07f10c400.7.azurestaticapps.net`.
- `www` — CNAME to `brave-pebble-07f10c400.7.azurestaticapps.net`.

## Rollback

Do not delete the Azure resource during a normal rollback. Redeploy the previous reviewed Git commit through the same workflow. If the Azure endpoint itself is unavailable, restore only the prior public-site `@` A records and `www` CNAME after recording their exact values. Never modify the `app`, MX, SPF, DKIM, DMARC or Microsoft 365 validation records as part of a website rollback.
