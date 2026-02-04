# Avoren Group Static Website

A production-ready static website for Avoren Group with a minimal, institutional aesthetic. Built with plain HTML, CSS, and JavaScript for easy deployment on GitHub Pages or Cloudflare Pages.

## Structure

```
.
├── index.html
├── about.html
├── holdings.html
├── involved.html
├── contact.html
├── privacy.html
├── 404.html
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── main.js
    └── img
```

## Deployment

### GitHub Pages
1. Push this repository to GitHub.
2. In **Settings → Pages**, select the `main` branch and `/root` directory.
3. Save. The site will deploy automatically.

### Cloudflare Pages
1. Create a new Cloudflare Pages project.
2. Select this repository.
3. Set **Build command** to _none_ and **Build output directory** to `/`.
4. Deploy.

## Customization

- **Company name**: update the header and footer text across the HTML files.
- **Inquiry email**: update `inquiries@avorengroup.com` in `contact.html` and `assets/js/main.js`.
- **Open Graph image**: add an image at `assets/img/og-placeholder.png` and update the meta tag paths if desired.

## Notes

The contact form prepares a mailto draft and does not submit data to a server.
