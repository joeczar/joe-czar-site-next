import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import JoeCzar from '../components/joeCzarNeon';
import Social from '../components/social';
import Layout from '../components/layout';
import { SocialData, site } from '../utils/metaData';
import SEO from '@/components/seo';

interface Props {
  title: string;
  social: SocialData
}


const LandingPage: NextPage<Props> = ({ title, social }) => {
  return (
    <Layout title={title}>
      <SEO title={title} description={site.description} />
      <div className="h-full w-full flex flex-col justify-around items-center flex-grow">
        

        <JoeCzar />
        <Social social={{
          github: site.social.github,
          linkedIn: site.social.linkedIn,
        }} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetServerSideProps<Props> = async () => {

  return {
    props: {
      title: site.title,
      social: site.social,
    },
  };
};


export default LandingPage;


