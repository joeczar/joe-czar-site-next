export interface SiteMetaData {
  author: AuthorData;
  title: string;
  description: string;
  siteUrl: string;
  social: SocialData;
}
export interface AuthorData {
  name: string;
  summary: string;
}
export interface SocialData {
  twitter: string;
  github: string;
  linkedIn: string;
}

export const site = {
  title: `Joe Czarnecki | Developer`,
  author: {
    name: `Joe Czarnecki`,
    summary: `Web Developer with a passion for AI, medical applications, user-focused projects and music. Skilled in frontend technologies, team leadership, and project management. Committed to innovation, collaboration, and driving project success in dynamic environments.`,
  },
  description: `Contact and Portfolio site.`,
  siteUrl: `https://joeczar.com/`,
  social: {
    twitter: `https://twitter.com/RollerDev`,
    github: `https://github.com/joeczar`,
    linkedIn: `https://www.linkedin.com/in/joe-czar/`,
  },
};
