# Brian Fernandes Portfolio

Editorial portfolio built with Astro and Decap CMS.

## Local preview
1. Install Node.js LTS.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:4321`.

## Local CMS
In a second terminal run `npx decap-server`, then open `http://localhost:4321/admin/`.

## GitHub Pages
Push to `main`, then set Repository Settings > Pages > Source to GitHub Actions.

## CMS authentication
Replace the placeholders in `public/admin/config.yml`. The GitHub backend requires an OAuth service. The public site works before OAuth is configured; only remote CMS login waits for this step.
