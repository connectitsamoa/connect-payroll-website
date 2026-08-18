# Connect Payroll public website

This directory is a small, dependency-free public website for Connect Payroll. It is deliberately separate from the authenticated payroll application so the marketing copy can be reviewed without exposing payroll screens or customer data.

## Local preview

From the repository root, run any static server and open `/marketing/`:

```powershell
python -m http.server 4173 --directory marketing
```

Then visit <http://localhost:4173>. The site needs no build step, package install, analytics, CMS or server-side form. Enquiries use `sales@connectpayroll.ws`; sign-in links to <https://app.connectpayroll.ws>.

## Publishing boundary

The site is ready to be copied to the approved public web host when Connect IT chooses one. This change does not alter DNS, Azure, Microsoft 365, domain records or the authenticated payroll application. Review links, wording and contact addresses before each publication.
