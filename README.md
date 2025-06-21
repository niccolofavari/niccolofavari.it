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

## Project Structure

This project uses a sophisticated setup to keep the source code open while keeping the content (especially drafts) private.

-   **Public Repository (`niccolofavari.it`)**: This is the main repository. It contains all the Astro application code, components, layouts, and styles. This is the repository you are currently viewing.
-   **Private Content Repository (`blog-content`)**: A separate, private repository that contains only the MDX content files located in `src/content/`.
-   **Git Submodule**: The private content repository is linked to this public repository as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). This allows the public code to access the private content during the build process without exposing the content repository itself.

## Getting Started

Because this project uses a Git submodule for content, the setup process is slightly different from a standard repository.

1.  **Clone the Repository**:
    You must use the `--recurse-submodules` flag to clone the main repository and initialize the content submodule at the same time.

    ```bash
    git clone --recurse-submodules git@github.com:niccolofavari/niccolofavari.it.git
    cd niccolofavari.it
    ```

2.  **Install Dependencies**:
    This project uses `npm` for package management.

    ```bash
    npm install
    ```

3.  **Run the Development Server**:
    This command starts the local development server.

    ```bash
    npm run dev
    ```

## Content Management

-   **Location**: All content is managed in the private `blog-content` repository, which is mapped to the `src/content` directory.
-   **Drafts**: To prevent an article from being published, add `draft: true` to its MDX frontmatter. The build process is configured to automatically exclude any posts marked as a draft.

## Deployment

This project is configured for automatic deployment to GitHub Pages.

1.  **Trigger**: A deployment is automatically triggered on every `push` to the `main` branch.
2.  **Process**: A GitHub Action (`.github/workflows/deploy.yml`) checks out both the public repository and the private content submodule, builds the site, and deploys the static output.
3.  **Authentication**: For the GitHub Action to access the private `blog-content` repository, a **Personal Access Token (PAT)** must be configured.

    -   **Create a PAT**: Follow the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) to create a "classic" PAT with the `repo` scope.
    -   **Add to Secrets**: Add this token as a repository secret named `GH_PAT` in the `Settings` > `Secrets and variables` > `Actions` section of this public repository.

## Contributing

While this is a personal project, feedback and suggestions are welcome via issues on the repository (if public).

## License

The source code for this project is licensed under the [MIT License](./LICENSE_CODE.md).

The content (text, images, and other media created for this site) is dedicated to the public domain via [CC0 1.0 Universal (CC0 1.0)](./LICENSE_CONTENT.md).
