# Indra Portfolio — React + Vite

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start dev server (localhost:5173):
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```
   Output goes to `dist/` — drop it on Vercel, Netlify, or GitHub Pages.

## Deploy to Vercel (fastest)
- Run `npm run build`
- Drag the `dist/` folder to vercel.com/new
- Done — live in seconds, no config needed.

## Deploy to GitHub Pages
- Run `npm run build`
- Push the `dist/` folder contents to your `gh-pages` branch.

## Project Structure
```
indra-portfolio/
├── index.html          # HTML entry point
├── vite.config.js      # Vite config
├── package.json
└── src/
    ├── main.jsx        # React root mount
    ├── App.jsx         # All components + data
    └── index.css       # All styles
```
