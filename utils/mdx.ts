import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getPosts() {
  const postsDir = path.join(root, 'content/posts');
  const postFilePaths = fs
    .readdirSync(postsDir)
    .filter((path) => /\.mdx?$/.test(path));

  const posts = await Promise.all(
    postFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(
        path.join(root, 'content/posts', filePath),
        'utf-8'
      );

      const { content, data } = matter(source);
      const mdxSource = await serialize(content);

      return {
        slug: filePath.replace(/\.mdx?$/, ''),
        frontMatter: {
          ...data,
          date: data.date && data.date.toISOString(),
        },
        mdxSource,
      };
    })
  );

  return posts.sort((a: any, b: any) => {
    return (
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
    );
  });
}
