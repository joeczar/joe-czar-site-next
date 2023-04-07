import React from 'react';
import { GetStaticProps } from 'next';
import Layout, { LayoutProps } from '../components/layout';
import SEO from '../components/seo';

export interface NotFoundPageProps extends LayoutProps {
  location: Location;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ title,  location }) => {
  return (
    <Layout location={location} title={title}>
      <SEO title={title} description='404: Not Found'/>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;`t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const getStaticProps: GetStaticProps<NotFoundPageProps> = async () => {
  const title = 'Your Site Title';

  return {
    props: {
      title,
      
      location: {} as Location, // Add a dummy location prop
    },
  };
};
