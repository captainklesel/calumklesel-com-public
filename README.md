# README

**Status:** MVP 1 | UI placeholder art, minimal styling, full SPA plumbing in place.  
**License:** All code is MIT; images/audio in /public/assets are © Calum Klesel, used with permission only.

## Current goal

Lay down a solid technical foundation: Astro static-site build + a lightweight vanilla-JS state-machine, before expanding features. Today it’s a clean, readable SPA with a few interactive elements. Next is to add styling, gamification features for site navigation, animations, VFX, and audio.

## Version 1 Highlights

Area | What’s implemented
--- | ---
[x] Astro build | Generates static HTML/CSS/JS; deploy anywhere as plain files.
[x] Vanilla state machine | enter/exit hooks per scene, singleton pattern, no front-end frameworks.
[x] Scene manager | Shows/hides sections. URL is updated. (?state=home / projects&index=2).
[~] Back/Forward sync | popstate listener keeps SPA in line with browser history.
[x] Copy loader | All page text comes from copy.js so content edits don’t touch templates.
[~] Utility helpers | setImgWithFallback, lazy-img, etc. for production robustness.
[ ] Progressive enhancement | Content is still readable without JS; <noscript> notice included.
[ ] Ready for polish | CSS tokens, utility layers, and component stubs waiting for visual assets.

## Quick start

1. Clone the repo
2. Install dependencies with `npm install`
3. Run the dev server with `npm run dev`
4. Open your browser to [http://localhost:4321](http://localhost:4321)
5. Edit the text in `src/content/copy.js` to get started with your own copy.
6. Build the project with `npm run build` to generate static files in the `dist/` folder.
7. Deploy the contents of `dist/` to your favorite static file host (Render, Netlify, GitHub Pages, S3, Cloudflare Pages, etc.).

## File structure

``` pgsql
src/
├─ content/         copy.js          # all on-page text and image src attributes are here
├─ scripts/
│   ├─ SceneManager.js
│   ├─ StateMachine.js
│   └─ utils/       setImgWithFallback.js …
├─ components/      DisplayOverlay.astro, NavBar.astro …
├─ pages/           home.astro, about.astro, projects.astro …
└─ styles/          globals.css (tokens > utilities > overrides)
public/assets/      hero.png, fallback.png, placeholder.svg
```

## Milestones

**MVP 1:**

- [x] SPA plumbing - URL routing, state machine, and scene manager are all in place.
- [x] Copy loading - all page text and image src attributes are loaded from a copy.js file-allows for easy editing of the content without touching the code. Copy is loaded with innerHTML for now and will be replaced with a more robust solution later.
- [x] Visual skeleton – add CSS tokens, utility classes, and component stubs for styling.
- [ ] Deployment pass – ensure the site is deployable to various static file hosts (Render, Netlify, GitHub Pages, S3, Cloudflare Pages, etc.).
- [ ] MVP 1 – ensure the site is fully functional and all features are working as expected.
- [] Progressive enhancements - content is still readable without JS; <noscript> notice included.

**Version 2+**

- [ ] Visual polish – add visual assets, animations, and VFX and stub out scenes.
- [ ] Gamification – add unlocks, XP bar, and mini-puzzle to reveal contact information.
- [ ] Audio/SFX – add sound effects and background music using Howler.js.
- [ ] Accessibility pass – ensure keyboard navigation is fully accessible and screen-reader friendly.
- [ ] Mobile pass – ensure mobile experience is smooth and responsive.
- [ ] SEO pass – ensure all pages are crawlable and indexable by search engines.
- [ ] Analytics pass – add Google Analytics or similar to track user engagement.

## Contributing / forking

Feel free to fork and build your own portfolio or resume site. If you improve the core utilities or find bugs, PRs welcome!

## License

All code is MIT; images/audio in /public/assets are © Calum Klesel, used with permission only.
