# Roel Schoonderbeek — Portfolio (React)

A React conversion of the original Webflow-exported site (Home, Portfolio,
Services, About, Contact). Built with **Vite + React + React Router**.

## What's preserved

- **100% of the original visual design** — the app loads the exact same
  external Webflow stylesheet and Google Fonts the original site used, so
  every layout, spacing, color-scheme, and responsive breakpoint is identical.
- **All animations/interactions**, reimplemented as real React components:
  - `SmoothScroll` — Lenis smooth scrolling (same config as the original)
  - `BackToTop` — GSAP + ScrollTrigger fade/scale-in button
  - `ProgressBar` — GSAP + ScrollTrigger scroll progress bar with click-to-scroll
  - `TestimonialSlider` — the testimonial carousel (arrows, dots, star
    ratings), shared across all 5 pages, driven by data in `src/data/testimonials.js`
  - `PortfolioGallery` — the custom GSAP "wipe" slideshow on the Portfolio
    page (wheel/touch/drag navigation via GSAP Observer, thumbnail nav),
    driven by `src/data/gallery.js`
  - `Navbar` — mobile hamburger menu + language dropdown
  - `ContactForm` — controlled form matching the original field layout and
    success/error messaging
- **All internal navigation** goes through React Router (`<Link>`), so
  moving between pages doesn't reload the page. External links (Instagram,
  LinkedIn, credit link) remain plain `<a>` tags.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, BackToTop, ProgressBar, SmoothScroll,
                TestimonialSlider, PortfolioGallery, ContactForm, Layout
  data/         testimonials.js, gallery.js
  pages/        Home, Portfolio, Services, About, Contact
  styles/       overrides.css (global utility CSS extracted from the
                original page <head>, e.g. color-scheme variables, focus
                states, slider-dot styling)
```

## Notes

- The Webflow shared stylesheet is loaded from Webflow's CDN in
  `index.html`. If you'd rather self-host it, download the file and update
  the `<link>` tag.
- `ContactForm` currently simulates a submission after a short delay —
  wire up `handleSubmit` in `src/components/ContactForm.jsx` to your real
  form backend/endpoint.
- The image assets (photos) are referenced directly from the original
  Webflow CDN URLs, so an internet connection is required to see them.
