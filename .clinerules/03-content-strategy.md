# Content Strategy & Management

## 1. Content Categories
The website will feature content across these primary categories:
- **Creations & Projects**: Showcases of tangible work (woodworking, music, game dev, photography, tech experiments). Each project can include its own series of updates or a log.
- **Reflections & Essays**: In-depth written pieces on topics like consciousness, technology, psychedelics, music making, game development theory, etc.
- **Reviews & Curations**: Media reviews (games, movies, books) and in-depth discussions around interesting YouTube videos or other curated content.
- **Learnings & How-Tos**: Educational content, tutorials, progress logs for skills (e.g., calisthenics, tech skills, music techniques).
- **Notes & Ephemera**: Shorter, informal updates, quick thoughts, or ideas not tied to a specific project or essay.

## 2. Content Types (Examples for `contentType` frontmatter)
- `essay`
- `game-review`, `movie-review`, `book-review`
- `video-discussion`, `link-curation`
- `project-showcase` (for the main page of a creation/project)
- `project-update` (for individual updates within a project)
- `tutorial`, `learning-log`
- `note`, `quick-thought`
- `photo-gallery`, `woodworking-project-showcase`, `music-track-showcase`

## 3. Multilingual Content (English & Italian)
- All content should be available in both English (`en`) and Italian (`it`).
- Use translated slugs for URLs in each language (e.g., `/en/essays/my-topic/` and `/it/saggi/mio-argomento/`).
- The site will attempt to redirect users to their browser's preferred language.

## 4. Frontmatter Standards
Each MDX file must include the following frontmatter:
- `title`: (Required) The main title of the content.
- `pubDate`: (Required) The initial publication/creation date (YYYY-MM-DD).
- `updatedDate`: (Optional) The date of the last significant update (YYYY-MM-DD).
- `description`: (Required) A brief summary (1-2 sentences) for SEO and previews.
- `category`: (Required) One of the defined content categories (see section 1).
- `contentType`: (Recommended) A more specific type (see section 2).
- `tags`: (Optional) Array of relevant keywords/topics.
- `growthStage`: (Required) `Seedling` | `Budding` | `Evergreen`.
- `lang`: (Required) Language code: `en` or `it`.
- `translationKey`: (Required) A unique key shared between the English and Italian versions of the same content piece (e.g., `my-unique-essay-001`).
- `toc`: (Optional, boolean) Whether to display a table of contents (primarily for longer content).
- `projectSlug`: (Optional) If part of a larger project in "Creations & Projects," the slug of the main project page.
- `relatedHobbies`: (Optional) Array of relevant hobbies (e.g., `["tech", "game-dev"]`).
- `coverImage`: (Optional) Path to a cover image for social sharing and previews.
- `coverImageAlt`: (Required if `coverImage` is present) Alt text for the cover image.

## 5. SEO Best Practices for Content
- Ensure all images have descriptive `alt` text.
- Write clear, concise `description` frontmatter for good SERP snippets.
- Internally link to other relevant content on the site where appropriate.
- Structure longer content with clear headings (H2, H3, etc.) for readability and SEO.

## 6. Rich Media & Custom Components
- Actively incorporate illustrations, custom graphics, diagrams, and interactive elements.
- Utilize pre-defined custom MDX components for consistent styling:
    - `ComingSoon`: Indicates an article is planned or partially written.
    - `AssumedAudience`: Clarifies the intended reader.
    - `Alert`: Highlights important notices.
    - `BookCallout`: For book recommendations.
    - `GrowthStageIndicator`: Visually displays content maturity.
    - *(Others as defined/needed)*
