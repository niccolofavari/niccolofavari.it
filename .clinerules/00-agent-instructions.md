# Cline Agent Instructions: Personal Website Project

## 1. Documentation & Reporting
- **README.md**:
    - Location: Project root (`./README.md`).
    - Action: Keep updated with setup instructions, a brief project overview (linking to `PROJECT_OVERVIEW.md` or similar), and key operational commands.
    - Trigger: Prompt to update after significant feature additions or changes to the build/dev process.
- **Colophon Page**:
    - Suggested Location: `src/content/pages/colophon.mdx` (or `src/pages/colophon.mdx`).
    - Action: Assist in keeping this page updated when new technologies are integrated or significant design/philosophy decisions are made. Refer to `01-core-philosophy.md`, `02-technology-stack.md`, and `04-design-typography.md` for content.
- **Changelog**:
    - Location: Project root (`./CHANGELOG.md`).
    - Action: Prompt to add entries for new features, bug fixes, and significant updates. Entries should be concise.

## 2. File & Directory Structure Conventions
- **MDX Content (Posts, Notes, Pages)**:
    - Default Location: `src/content/` (e.g., `src/content/posts/`, `src/content/notes/`, `src/content/pages/`).
    - Action: Confirm or create subdirectories as needed.
- **Astro Components (`.astro` files)**:
    - Location: `src/components/`.
- **MDX Custom Components (React/JS for MDX)**:
    - Location: `src/components/mdx/` (or a similar dedicated directory like `src/components/content/`).
- **Layouts (`.astro` files for page structure)**:
    - Location: `src/layouts/`.
- **Static Assets (images, fonts for `public/`)**:
    - Location: `public/`.
- **Astro-Processed Assets (images for `<Image>` component, etc.)**:
    - Location: `src/assets/`.
- **Styling (SCSS/Sass)**:
    - Main global styles: `src/styles/global.scss`.
    - SCSS Partials: Organized in subdirectories under `src/styles/` (e.g., `base/`, `utils/`, `layout/`, `components/`, `content/`). Key partials include:
        - `utils/_variables.scss`: For design tokens (colors, fluid type/space scales, breakpoints).
        - `base/_reset.scss`: For CSS reset/normalize.
        - `base/_typography.scss`: For base typographic styles using fluid scales.
    - Component-Scoped Styles: Use `<style lang="scss">` tags within `.astro` components for scoped styling, importing global variables/mixins as needed.
    - MDX Content Styling: A dedicated `content/_mdx.scss` (imported into `global.scss` or `ContentLayout.astro`) will style HTML elements generated from MDX.
    - Markup: Use semantic HTML and descriptive, BEM-like class names. Avoid utility-first classes.

## 3. Code Generation & Modification
- **New MDX Content**: When creating new content pages, use a basic MDX template including frontmatter for `title`, `pubDate`, `updatedDate` (optional), and `growthStage`.
- **Custom Components**: Place newly generated Astro or MDX-specific components into their conventional directories as listed above.
- **Imports**: Ensure generated import paths for components and utilities are correct relative to file locations.

## 4. Dependency & Environment Management
- When changes require new dependencies, update `package.json` and prompt for `npm install` (or `yarn install` / `pnpm install` as appropriate).
- If new environment variables are needed, remind to update/create `.env` and add to `.env.example`.

## 5. Internationalization (i18n) & SEO
- **Language Handling**:
    - When new content is created in one language, prompt for the creation of a corresponding placeholder file for the other language. Ensure both files share the same `translationKey`.
    - All content files must include `lang` (e.g., `en`, `it`) and `translationKey` in their frontmatter.
    - When generating slugs, ensure they are appropriate for the specified `lang` (i.e., translated if `lang: it`).
- **SEO Content**:
    - For all images, prompt for descriptive `alt` text.
    - Ensure `description` frontmatter is present and suitable for SEO.
    - When generating content with a `coverImage`, ensure `coverImageAlt` is also included.
- **File Placement for i18n**:
    - Place English content under `src/content/en/...`
    - Place Italian content under `src/content/it/...`
    - Category subdirectories should also be translated in the path for Italian (e.g., `src/content/it/saggi/` for essays).
