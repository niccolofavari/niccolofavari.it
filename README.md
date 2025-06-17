# Personal Website & Digital Garden

This repository contains the source code for a personal website, built as an open-source digital garden. It's a space for sharing creations, reflections, reviews, learnings, and notes on a variety of interests.

## Core Philosophy

This project is guided by a few core principles:

-   **Open-Source Digital Garden**: The project and its content are intended to be open source, evolving publicly. This encourages transparency, sharing, and community learning.
-   **Craftsmanship & Experimentation**: It's a space for meticulous craftsmanship and for experimenting with web technologies and creative ideas.
-   **Living Content & Growth Stages**: Content is not static and evolves through stages:
    -   **Seedling**: Initial ideas, brief notes, or rough drafts.
    -   **Budding**: In-progress content, actively being developed.
    -   **Evergreen**: Mature, comprehensive, and relatively stable pieces.

For more details, see the [Core Philosophy](./.clinerules/01-core-philosophy.md) document.

## Technology Stack

The website is built using the following technologies:

-   **Primary Framework**: [Astro](https://astro.build/)
-   **Content Format**: [MDX](https://mdxjs.com/)
-   **Styling**: SCSS (Sass), utilizing custom CSS with Utopia.fyi fluid design principles for responsive typography and spacing.
-   **Client-Side Interactivity**: Vanilla JavaScript and Astro Islands
-   **Version Control**: Git
-   **Hosting**: To Be Determined (TBD)

Further details can be found in the [Technology Stack](./.clinerules/02-technology-stack.md) document.

## Content Strategy

The website features diverse content organized into several key categories:

-   **Creations & Projects**: Showcases of tangible work (woodworking, music, game dev, photography, tech experiments).
-   **Reflections & Essays**: In-depth written pieces.
-   **Reviews & Curations**: Media reviews and discussions.
-   **Learnings & How-Tos**: Educational content and tutorials.
-   **Notes & Ephemera**: Shorter, informal updates and thoughts.

### Key Features:

-   **Multilingual Content**: All content is available in English (`en`) and Italian (`it`), with translated slugs and browser-based language detection.
-   **SEO Focused**: Best practices for SEO are implemented, including descriptive metadata, `alt` text for images, and structured data.
-   **Rich Media & Custom Components**: The site utilizes custom MDX components for enhanced content presentation.

For a complete overview, refer to the [Content Strategy & Management](./.clinerules/03-content-strategy.md) guidelines.

## Design & Typography

The visual design aims to be clean, minimalist, and intentional, prioritizing readability and user experience. Key aspects include:

-   Carefully selected fonts for headers and body text.
-   A fluid typography system for responsive text scaling.

More information is available in the [Design & Typography](./.clinerules/04-design-typography.md) document.

## Getting Started

*(Instructions for setting up the project locally will be added here once the Astro project is initialized and basic dependencies are defined. This typically involves cloning the repository, installing dependencies via npm/yarn/pnpm, and running the development server.)*

```bash
# Example commands (will be updated)
# git clone [repository-url]
# cd [repository-name]
# npm install
# npm run dev
```

## Project Structure Overview

-   `.clinerules/`: Contains guidelines and instructions for Cline, the AI development assistant.
-   `src/content/`: Houses all MDX content, organized by language (e.g., `en/`, `it/`) and then by category.
-   `src/components/`: Astro components.
-   `src/components/mdx/`: Custom components for use within MDX files.
-   `src/layouts/`: Astro layout components for page structure.
-   `src/assets/`: Static assets processed by Astro (e.g., images for the `<Image>` component).
-   `public/`: Static assets served directly (e.g., favicons, fonts).
-   `src/styles/`: Global SCSS styles (`global.scss`) and partials (e.g., `_variables.scss`, `_reset.scss`, `_typography.scss`) organized in subdirectories like `base/`, `utils/`.

## Contributing

While this is a personal project, feedback and suggestions are welcome via issues on the repository (if public).

## License

The source code for this project is licensed under the [MIT License](./LICENSE_CODE.md).

The content (text, images, and other media created for this site) is dedicated to the public domain via [CC0 1.0 Universal (CC0 1.0)](./LICENSE_CONTENT.md).
