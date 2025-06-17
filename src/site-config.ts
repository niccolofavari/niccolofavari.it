// astro/src/site-config.ts

export const SITE_TITLE_EN = "Nick's Digital Garden & Portfolio";
export const SITE_TITLE_IT = "Il Giardino Digitale & Portfolio di Nick";

export const SITE_DESCRIPTION_EN = "An exploration of various interests: tech, game dev, retro gaming, woodworking, music, photography, calisthenics, philosophy, and more.";
export const SITE_DESCRIPTION_IT = "Un'esplorazione di vari interessi: tecnologia, sviluppo di videogiochi, retro gaming, falegnameria, musica, fotografia, calisthenics, filosofia e altro ancora.";

export const AUTHOR_NAME = "Niccolo' Favari"; // For copyright/license
export const DISPLAY_NAME = "Nick"; // For general site display if needed

export const SOCIAL_LINKS = {
  github: "https://github.com/niccolofavari",
  mastodon: "https://mastodon.gamedev.place/@nikles",
  linkedin: "https://www.linkedin.com/in/niccolofavari/",
  bluesky: "https://bsky.app/profile/niklesdev.bsky.social",
};

export const NAV_LINKS_CONFIG = {
  en: [
    { name: "Home", href: "/en/", categorySlug: "home" },
    { name: "Creations", href: "/en/creations-projects/", categorySlug: "creations-projects" },
    { name: "Essays", href: "/en/reflections-essays/", categorySlug: "reflections-essays" },
    { name: "Reviews", href: "/en/reviews-curations/", categorySlug: "reviews-curations" },
    { name: "Learnings", href: "/en/learnings-how-tos/", categorySlug: "learnings-how-tos" },
    { name: "Notes", href: "/en/notes-ephemera/", categorySlug: "notes-ephemera" },
  ],
  it: [
    { name: "Home", href: "/it/", categorySlug: "home" },
    { name: "Creazioni", href: "/it/creazioni-progetti/", categorySlug: "creazioni-progetti" },
    { name: "Saggi", href: "/it/riflessioni-saggi/", categorySlug: "riflessioni-saggi" },
    { name: "Recensioni", href: "/it/recensioni-curiosita/", categorySlug: "recensioni-curiosita" },
    { name: "Apprendimenti", href: "/it/apprendimenti-guide/", categorySlug: "apprendimenti-guide" },
    { name: "Note", href: "/it/note-efemere/", categorySlug: "note-efemere" },
  ],
};

export const FOOTER_EXTRA_LINKS = {
  en: [
    { name: "About", href: "/en/about/" }, // Placeholder, page to be created
    { name: "Colophon", href: "/en/colophon/" }, // Placeholder, page to be created
  ],
  it: [
    { name: "Chi Sono", href: "/it/about/" }, // Placeholder, page to be created
    { name: "Colophon", href: "/it/colophon/" }, // Placeholder, page to be created
  ]
};

export const LICENSE_CODE_URL = "/LICENSE_CODE.md";
export const LICENSE_CONTENT_URL = "/LICENSE_CONTENT.md";
