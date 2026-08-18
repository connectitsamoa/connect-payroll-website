# Connect Payroll public website

This directory is a small, dependency-free public website for Connect Payroll. It is deliberately separate from the authenticated payroll application so the marketing copy can be reviewed without exposing payroll screens or customer data.

## Local preview

From the repository root, run any static server and open `/marketing/`:

```powershell
python -m http.server 4173 --directory marketing
```

Then visit <http://localhost:4173>. The site needs no build step, package install, analytics, CMS or server-side form. Enquiries use `sales@connectpayroll.ws`; sign-in links to <https://app.connectpayroll.ws>.

## Publishing boundary

This public repository is the static website host for Connect Payroll. The GitHub Pages workflow publishes only the contents of `marketing/`; it does not expose the authenticated payroll application or customer data. This change does not alter DNS, Azure, Microsoft 365, domain records or the payroll application.

The public pages include privacy, service boundaries, security and support information. The site intentionally has no package manager, server-side form, analytics or online payment flow. Before merging a website change, preview the pages locally and run the static safety/link check from the private Connect Payroll application repository against this `marketing/` directory. Review links, wording and contact addresses before each publication.
