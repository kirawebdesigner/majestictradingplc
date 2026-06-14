# Technical Specification

## Stack
- Frontend: React with Vite.
- Styling: Custom CSS with design tokens, responsive media queries, and CSS animations.
- Motion: Framer Motion for reveal, parallax, and hover interactions.
- Icons: lucide-react.
- Backend: None for concept phase.
- Database: None for concept phase.
- Hosting: Static deployment compatible with Netlify, Vercel, or any static host.

## Architecture
- `src/App.jsx` owns homepage data and component composition.
- `src/styles.css` owns visual system, layout, breakpoints, and interaction states.
- `index.html` owns SEO shell and root mount.

## SEO
- One semantic H1.
- Organization JSON-LD.
- Meta title and description.
- Accessible image alt text.

## Security
- No secrets.
- Contact form is a static concept form and does not submit to a backend.
- External asset URLs are limited to visual concept imagery.

## API Routes
No API routes are required for Phase 1 and Phase 2 homepage concept.
