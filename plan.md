<!-- 993e7cb5-a919-4d1f-9613-88ea8513a20f e6114dd5-1185-4631-b065-7b8c6bd566c0 -->

# Svelte to React Migration Plan

## Overview

This plan outlines the migration from SvelteKit + Svelte to Vite + React + TypeScript + React Router + CSS Modules. All text content, page layouts, and routing structure will be preserved exactly.

## Current Architecture Analysis

**Framework:** SvelteKit with Svelte 3

**Build Tool:** Vite (already configured)

**Styling:** SCSS with global styles and component-scoped styles

**Routing:** File-based routing via SvelteKit

**TypeScript:** Already configured

**Key Dependencies:** svelte-feather-icons, sass

**Current Routes:**

- `/` - Homepage
- `/assets/attgora` - Assets page
- `/denhallbara` - Sustainable page
- `/integritetspolicy` - Privacy policy
- `/mindsetmeditation` - Mindset meditation landing
- `/mindsetmeditation/bump` - Mindset meditation bump offer
- `/newsletter` - Newsletter signup
- `/newsletter/bump` - Newsletter bump offer
- `/revivalsuccessful` - Revival successful page

## Migration Steps

### 1. Setup New React Project Structure

**Actions:**

- Update `package.json` with React dependencies (react, react-dom, react-router-dom, @types/react, @types/react-dom, @vitejs/plugin-react)
- Remove SvelteKit dependencies (@sveltejs/kit, @sveltejs/adapter-auto, svelte, svelte-check, svelte-preprocess, svelte-feather-icons, eslint-plugin-svelte3, prettier-plugin-svelte)
- Update `vite.config.js` to use React plugin instead of SvelteKit
- Create new `tsconfig.json` for React
- Update `.gitignore` to remove `.svelte-kit` and add React-specific ignores
- Create new `index.html` in root (migrate content from `src/app.html`)

### 2. Convert Global Styles to CSS

**Actions:**

- Convert `src/styles/variables.scss` to `src/styles/variables.css` (CSS custom properties already used)
- Convert `src/styles/global.scss` to `src/styles/global.css`
- Convert `src/styles/reset.scss` to `src/styles/reset.css`
- Convert `src/styles/breakpoints.scss` to `src/styles/breakpoints.css` (export as CSS custom properties)
- Remove sass dependency

### 3. Setup React Router Structure

**Actions:**

- Create `src/main.tsx` as entry point
- Create `src/App.tsx` with React Router setup
- Create `src/components/` directory for shared components
- Create `src/pages/` directory for route components
- Implement route configuration matching existing SvelteKit routes

### 4. Convert Shared Components to React

**Convert these components with CSS Modules:**

- `src/lib/button/Button.svelte` → `src/components/Button/Button.tsx` + `Button.module.css`
- `src/lib/card/Card.svelte` → `src/components/Card/Card.tsx` + `Card.module.css`
- `src/lib/divider/Divider.svelte` → `src/components/Divider/Divider.tsx` + `Divider.module.css`
- `src/lib/footer/Footer.svelte` → `src/components/Footer/Footer.tsx` + `Footer.module.css`
- `src/lib/modal/Modal.svelte` → `src/components/Modal/Modal.tsx` + `Modal.module.css`

### 5. Convert Homepage Components to React

**Convert these components with CSS Modules:**

- `src/lib/homepage/header/Header.svelte` → `src/components/Homepage/Header/Header.tsx` + `Header.module.css`
- `src/lib/homepage/header/Heading.svelte` → `src/components/Homepage/Header/Heading.tsx` + `Heading.module.css`
- `src/lib/homepage/header/Logo.svelte` → `src/components/Homepage/Header/Logo.tsx` + `Logo.module.css`
- `src/lib/homepage/intro/Intro.svelte` → `src/components/Homepage/Intro/Intro.tsx` + `Intro.module.css`
- `src/lib/homepage/description/Description.svelte` → `src/components/Homepage/Description/Description.tsx` + `Description.module.css`
- `src/lib/homepage/about-markus/AboutMarkus.svelte` → `src/components/Homepage/AboutMarkus/AboutMarkus.tsx` + `AboutMarkus.module.css`
- `src/lib/homepage/courses/Courses.svelte` → `src/components/Homepage/Courses/Courses.tsx` + `Courses.module.css`
- `src/lib/homepage/testimonials/Testimonials.svelte` → `src/components/Homepage/Testimonials/Testimonials.tsx` + `Testimonials.module.css`
- `src/lib/homepage/testimonials/Testimonial.svelte` → `src/components/Homepage/Testimonials/Testimonial.tsx` + `Testimonial.module.css`
- `src/lib/homepage/cta-divider/CtaDivider.svelte` → `src/components/Homepage/CtaDivider/CtaDivider.tsx` + `CtaDivider.module.css`
- `src/lib/homepage/cta-popup/CtaPopup.svelte` → `src/components/Homepage/CtaPopup/CtaPopup.tsx` + `CtaPopup.module.css`
- `src/lib/homepage/bottom-cta/BottomCta.svelte` → `src/components/Homepage/BottomCta/BottomCta.tsx` + `BottomCta.module.css`

### 6. Convert Route Pages to React

**Convert all route pages:**

- `src/routes/index.svelte` → `src/pages/Home/Home.tsx` + `Home.module.css`
- `src/routes/assets/attgora/index.svelte` → `src/pages/Assets/Attgora/Attgora.tsx` + `Attgora.module.css`
- `src/routes/denhallbara/index.svelte` → `src/pages/Denhallbara/Denhallbara.tsx` + `Denhallbara.module.css`
- `src/routes/integritetspolicy/index.svelte` → `src/pages/Integritetspolicy/Integritetspolicy.tsx` + `Integritetspolicy.module.css`
- `src/routes/mindsetmeditation/index.svelte` → `src/pages/MindsetMeditation/MindsetMeditation.tsx` + `MindsetMeditation.module.css`
- `src/routes/mindsetmeditation/bump.svelte` → `src/pages/MindsetMeditation/Bump/Bump.tsx` + `Bump.module.css`
- `src/routes/newsletter/index.svelte` → `src/pages/Newsletter/Newsletter.tsx` + `Newsletter.module.css`
- `src/routes/newsletter/bump.svelte` → `src/pages/Newsletter/Bump/Bump.tsx` + `Bump.module.css`
- `src/routes/revivalsuccessful/index.svelte` → `src/pages/RevivalSuccessful/RevivalSuccessful.tsx` + `RevivalSuccessful.module.css`

### 7. Convert Utilities and Data

**Actions:**

- Keep `src/data/testimonials.ts` (no changes needed)
- Keep `src/interfaces/Testimonial.ts` (no changes needed)
- Convert `src/utils/modalHelpers.ts` to React-compatible hooks if needed
- Replace svelte-feather-icons with react-feather

### 8. Update Configuration Files

**Actions:**

- Update/create `.eslintrc` for React
- Update `tsconfig.json` for React JSX
- Remove `svelte.config.js`
- Remove `src/app.d.ts`
- Remove `src/hooks.ts` if not needed

### 9. Handle Svelte-Specific Features

**Migration patterns:**

- `<script lang="ts">` → React component with TypeScript
- `export let prop` → React props interface
- `$:` reactive statements → `useEffect` / `useMemo` / `useState`
- `on:click` → `onClick`
- `bind:` → controlled components with state
- `{#if}` → conditional rendering with `&&` or ternary
- `{#each}` → `.map()`
- `<slot />` → `children` prop
- `<svelte:head>` → react-helmet-async
- `<svelte:window>` → window event listeners in `useEffect`
- Svelte transitions → CSS transitions or animation libraries
- Svelte stores → React Context / state management

### 10. Testing and Validation

**Actions:**

- Verify all routes render correctly
- Test all interactive features (modals, carousels, forms)
- Verify all external scripts load (MailerLite, Facebook Pixel)
- Check responsive design on all breakpoints
- Validate all links and navigation
- Test form submissions
- Verify SEO meta tags on all pages

### 11. Cleanup

**Actions:**

- Remove all `.svelte` files
- Remove `src/routes/` directory
- Remove `src/lib/` directory
- Remove SvelteKit-specific files
- Update `package.json` scripts (remove svelte-kit commands)
- Update README if needed

## Key Considerations

**Preserve:**

- All Swedish text content exactly as is
- All page layouts and styling
- All external integrations (MailerLite, Facebook Pixel, Calendly, Vimeo)
- All images and static assets
- All meta tags and SEO content
- CSS variable naming and values

**React Patterns:**

- Use functional components with hooks
- Use TypeScript interfaces for props
- Use CSS Modules for component styles
- Use React Router v6 for routing
- Use react-helmet-async for head management
- Use react-feather for icons

**CSS Modules Pattern:**

```tsx
import styles from "./Component.module.css";
<div className={styles.container}>...</div>;
```

**File Structure:**

```
src/
  components/
    Button/
      Button.tsx
      Button.module.css
  pages/
    Home/
      Home.tsx
      Home.module.css
  styles/
    variables.css
    global.css
    reset.css
  data/
  interfaces/
  utils/
  main.tsx
  App.tsx
```

### To-dos

- [x] Setup new React project structure with updated package.json, vite.config, tsconfig, and index.html
- [x] Convert all SCSS files to CSS (variables, global, reset, breakpoints)
- [x] Create main.tsx, App.tsx, and React Router configuration with all routes
- [x] Convert shared components (Button, Card, Divider, Footer, Modal) to React with CSS Modules
- [x] Convert all homepage components to React with CSS Modules
- [x] Convert all route pages from Svelte to React with CSS Modules
- [ ] Update utilities and replace icon library (svelte-feather-icons to react-feather)
- [ ] Update ESLint, remove svelte.config.js, clean up configuration files
- [ ] Test all routes, interactive features, external scripts, responsive design, and forms
- [ ] Remove all Svelte files, directories, and update package.json scripts
