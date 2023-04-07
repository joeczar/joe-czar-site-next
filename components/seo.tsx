import Head from "next/head";
import {site } from "../utils/metaData";

export interface SEOProps {
  description: string;
  lang?: string;
  meta?: any[];
  title: string;
}

export interface site {
  site: {
  description: string;
  title: string;
  social: {
    twitter: string;
    github: string;
    linkedIn: string;
  }
}
}

const SEO: React.FC<SEOProps> = ({ description, lang = "en", meta = [], title }) => {



  return (
    <Head>
      <title>{title} | {site.title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="github:card" content="summary" />
      <meta name="github:creator" content={site.social.github} />
      <meta name="github:title" content={title} />
      <meta name="github:description" content={description} />
      {meta.map((m, index) => (
        <meta key={index} {...m} />
      ))}
    </Head>
  );
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: site.description,
};

export default SEO;
