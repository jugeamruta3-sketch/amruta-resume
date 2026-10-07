# Amruta Joshi — Developer Portfolio

A responsive, multi-page portfolio built with React and Vite. The design
follows the supplied dark-and-violet reference and introduces Amruta as a BMS
Finance graduate and aspiring full-stack developer.

## Features

- Separate Home, About, Projects, Skills, Résumé, and Contact pages.
- Direct, shareable routes at `/`, `/about`, `/projects`, `/skills`, `/resume`,
  and `/contact`.
- Responsive navigation and layouts for mobile, tablet, and desktop.
- Lazy-loaded React pages and project preview images.
- Locally bundled project-preview illustrations with native lazy image loading.
- Vite's production build, which minifies JavaScript and CSS and splits
  asynchronously loaded components into separate chunks.
- A contact form that opens a new email draft in the visitor's default mail app.

## Development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

## Production build and local verification

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

Open the local URL printed by Vite Preview, then check that each navigation
link opens its own page. Visit `/projects` and `/contact` directly, test the
mobile menu, and check the contact form. Production output is written to
`dist/`.

## Deploy to Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**, connect
   the repository, and set the base directory to `portfolio` if the repository
   contains other projects.
3. Use `npm run build` as the build command and `dist` as the publish directory.
   The included `netlify.toml` supplies these settings and configures the
   fallback required for direct links to React Router pages.
4. After the first successful deploy, open **Domain management → Add a domain**
   to connect a domain you own. Follow Netlify's DNS instructions; Netlify
   provisions and renews an HTTPS certificate once the domain is verified.
5. Test the deployed site over HTTPS at desktop and mobile widths. Also check
   it in current Chrome, Firefox, Safari, and Edge.

Deployment and custom-domain setup require access to a GitHub repository and
Netlify account, and ownership or DNS access to the chosen domain. They have
not been performed from this local workspace.

## Personalize before publishing

- Add real project links and update project descriptions to match the work.
- Add a résumé PDF and link to it from the Résumé section if available.
- Add a preferred contact email to the `mailto:` links. The contact form opens
  the visitor's mail app and does not send email through a server.
- Replace the `amruta-portfolio` repository name and Netlify setup details if
  you choose different hosting or repository names.

## Challenges and solutions

- **Keeping the reference's visual character on small screens:** the dark
  palette and violet accents are retained, while the hero, project cards, and
  contact form reflow into a single column on narrow screens.
- **Avoiding unnecessary work on initial load:** portfolio pages load as
  separate React chunks, and local project previews use `loading="lazy"` and
  `decoding="async"`.
- **Sending contact details without a server:** the form validates its fields
  in the browser and prepares an email draft rather than implying that a
  message was delivered.
