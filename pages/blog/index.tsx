import React from 'react';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../../components/layout';
import SEO, { SEOProps } from '@/components/seo';
import { getPosts } from '@/utils/mdx';
import { getAllPosts } from '../api/posts';

export type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export type Post = {
  meta: PostFrontMatter;
  content: string
};

export type BlogIndexProps = {
  posts: Post[];
  seoProps: SEOProps;
};
interface CustomComponents {
  [key: string]: React.ComponentType<any>;
}

const components: CustomComponents = {
  a: ({ href, children }) => (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ),
};

const seoProps: SEOProps = {
  title: 'Blog',
  description:
    'A blog about development, neurodivergence, Bipolar, ADHD, learnng, addiction and other things.',
};

const BlogIndex: React.FC<BlogIndexProps> = ({ posts, seoProps }) => {
  console.log(posts)
  if (!posts) return null;
  if(posts.length === 0) return <p>No posts found</p>
  return (
    <Layout title="Joe Czarnecki | Blog">
      <SEO
        title="All posts"
        description={seoProps.description}
      />
      <MDXProvider components={components}>
        {posts.map((post, i) => (
          <article key={post.meta.slug + `-${i}`}>
            <header>
              {post && post.meta.title && (
                <h1>
                  <Link href={`blog/${post.meta.slug}`}>
                    {post.meta.title}
                  </Link>
                </h1>
              )}
              {post && post.meta.date && <small>{post.meta.date}</small>}
            </header>
            <section>
              {post && post.meta.excerpt && (
                <p>{post.meta.excerpt}</p>
              )}
            </section>
          </article>
        ))}
      </MDXProvider>
    </Layout>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts, seoProps },
  };
}
