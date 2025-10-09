import { Metadata } from "next";

export const BLOG_TITLE = "labo-expresso.dev";
export const BLOG_SLOGAN = "Ici, on transmute la caféine en code.";
export const BLOG_META: Metadata = {
  title: "labo-expresso.dev | Caféine, Code & Découvertes d'un développeur transfusé au café",
  description: "labo-expresso : Découvertes, conseils et expérientations dans le monde changeant du développement web. ☕💻",
  keywords: [
    'développement web', 'TDD', 'conseil de code', 'bonnes pratiques', 'monde geek',
  ]
}
export const AUTHOR = {
  name: 'Guillaume Casbas',
  website: 'https://www.guillaumecasbas.fr',
  socials: [
    // { name: 'email', value: '' }, // TODO: add when I have created the specific email address
    { name: 'linkedin', value: 'https://www.linkedin.com/in/guillaumecasbas/' },
    { name: 'bluesky', value: 'https://bsky.app/profile/guillaumecasbas.fr' },
    { name: 'github', value: 'https://github.com/GuillaumeCasbas' },
  ]
};

export const HOME_OG_IMAGE_URL = "/assets/ogimage.png";
