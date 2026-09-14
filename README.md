# Circus Circus 2030

This project is ready for GitHub Pages. The included workflow builds and publishes the static site whenever the `main` branch changes.

## Deploy

1. Create a GitHub repository and upload this project to it.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or open **Actions → Deploy to GitHub Pages → Run workflow**.

The workflow automatically detects whether the repository is a root site such as `username.github.io` or a project site such as `username.github.io/repository-name` and sets all image, video, font, icon, and social-preview paths accordingly.

## Local commands

- `npm install` — install dependencies
- `npm run dev` — run the existing local preview
- `npm run build:github` — generate the deployable static site in `out/`
