

import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";


import "highlight.js/styles/atom-one-dark.css";
import { PostMeta, getPostFromSlug, getSlugs } from "../api/posts";
import Layout from "@/components/layout";
import SEO from "@/components/seo";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  console.log("PostPage", { post })
  return (
    <>
      <Layout title="Joe Czarnecki | Blog">
      <SEO description={post.meta.excerpt} title={post.meta.title} />
      <div className="post p-4">
      <h1 className="my-4">{post.meta.title}</h1>
      <p className="font-bold my-4">{post.meta.excerpt}</p>
      <p>{post.meta.date}</p>
      
      <MDXRemote {...post.source} components={{  Image }} />
      </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  console.log("getStaticProps", {slug,  mdxSource, meta })
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
