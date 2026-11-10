# Thomas Mignon — Personal Toolkit

A React and Tailwind CSS site that doubles as the documentation and demo surface for a small, source-first UI registry.

## Stack

- React 19 with Vite
- Tailwind CSS 4
- shadcn registry format for distributing the initial Button, Badge and Card components

The reusable component source lives under `registry/default/ui/`. The root `registry.json` describes what the registry can distribute. The site imports and demonstrates those same source components.

## Work locally

```sh
npm ci
npm run dev
```

Build the site and static registry payloads with:

```sh
npm run build
```

This writes the site to `dist/` and registry JSON to `dist/r/`. The root `registry.json` also makes this public GitHub repository usable directly as a GitHub registry once the repository is published.

## Publish with GitHub Pages

1. Push these files to the default branch of a GitHub repository. A public repository is required for GitHub Pages on GitHub Free.
2. In **Settings → Pages**, set the publishing source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site and registry payloads, then deploys `dist/`.
4. Find the published URL in **Settings → Pages**.

Before publishing, review the visible contact email, portrait and work descriptions to make sure you are comfortable sharing them publicly.
