import { defineConfig } from 'astro/config';

export default defineConfig({
  // For GitHub Pages, set BASE_PATH to "/<repo-name>/" in GitHub Actions or locally.
  // Example: BASE_PATH="/almont-robotics/" npm run build
  base: process.env.BASE_PATH ?? '/',
  site: process.env.SITE_URL ?? 'https://example.github.io',
  trailingSlash: 'always'
});
