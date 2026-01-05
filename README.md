# Almont Robotics — FRC 4961 (Astro + GitHub Pages)

Colors:
- Black
- Orange: `#F5680F`
- Green: `#419A43`

## Local dev
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (recommended)
1) Create a new GitHub repo (example: `almont-robotics`)
2) Push this project to the repo
3) In GitHub: **Settings → Pages**
   - Source: **GitHub Actions**

The included workflow will build + deploy automatically on every push to `main`.

### Important: set the base path
GitHub Pages for a project repo is served at:
`https://<org>.github.io/<repo>/`

So the site needs a base path of `/<repo>/`.

This workflow sets `BASE_PATH` automatically to `/<repo>/` during build.

## Content edits
- Pages live in `src/pages/`
- Photos live in `public/photos/`
