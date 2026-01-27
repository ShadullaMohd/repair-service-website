# Washing Machine & Fridge Repair Service Website

A professional, local SEO-optimized website built with **React**, **Vite**, and **Tailwind CSS**.

## Project Structure

```
repair-service-website/
├── src/
│   ├── components/  # Reusable UI components (Navbar, Footer, ServiceCard, etc.)
│   ├── pages/       # Route pages (Home, WashingMachineRepair, Contact, etc.)
│   ├── seo/         # SEO helpers (MetaTags, StructuredData)
│   ├── utils/       # Constants and helpers
│   └── main.jsx     # App entry point
├── public/          # Static assets (robots.txt, sitemap.xml)
└── vite.config.js   # Vite configuration with Tailwind CSS v4 support
```

## Features

- **SEO Optimized**: Unique meta tags, descriptions, and Open Graph tags for every page.
- **Structured Data**: JSON-LD Schema implementation for LocalBusiness and Service.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Performance**: Built on Vite for fast load times.
- **Routing**: Client-side routing with React Router.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Deployment

This project produces a static bundle. You can deploy the `dist/` folder to any static host (Vercel, Netlify, Github Pages, Hostinger, etc.).

### Deploying to Netlify/Vercel
- Connect the repository.
- Build command: `npm run build`
- Publish directory: `dist`
- **Important**: For SPA routing, ensure you set up a rewrite rule (e.g., `_redirects` file for Netlify) to redirect all traffic to `index.html`.

## Customization

- Update **Contact Info**: Edit `src/utils/constants.js`.
- Update **SEO**: Edit `src/seo/MetaTags.jsx` or specific pages.
- Update **Colors/Fonts**: Edit `src/index.css`.
