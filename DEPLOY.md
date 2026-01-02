# Deploying to GitHub Pages

## Quick Setup

1. **Create a GitHub repository** (if you haven't already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

## Two Deployment Options

### Option 1: Project Page (repo-name.github.io)
If your repo is named `website` or `blog`, your site will be at:
- `https://YOUR_USERNAME.github.io/website`

The config automatically detects your repo name and sets the base path.

### Option 2: User/Organization Page (username.github.io)
If you want your site at `https://YOUR_USERNAME.github.io` (no repo name in URL):

1. Create a repo named exactly `YOUR_USERNAME.github.io`
2. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     base: '',  // Empty base path
     site: 'https://YOUR_USERNAME.github.io',
     // ... rest of config
   });
   ```

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch
```

But the GitHub Actions workflow (already set up) is recommended - it deploys automatically on every push!

