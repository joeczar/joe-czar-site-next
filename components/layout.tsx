import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { rhythm, scale } from '../utils/typography';
import styles from './layout.module.scss';

export interface LayoutProps {
  title: string;
  location?: Location;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const router = useRouter();
  const rootPath = '/';
  const isRootPath = router.pathname === rootPath;
  const header = isRootPath ? (
    
    <h1 >
      <Link href="/" className="text-5xl">
          {title}
          </Link>
    </h1>
  ) : (
    <h3 className="">
      <Link href="/" className="text-4xl" >
          {title}
      </Link>
    </h3>
  );
  const isBlogPath = router.pathname.includes('blog');

  return (
    <div className={isBlogPath ? styles.blog: styles.main}>
      <header className="flex mx-auto my-5 ">{header}</header>
      <main className="flex flex-col max-w-4xl mx-auto flex-grow">{children}</main>
      <footer className="flex mt-auto mb-0 mx-auto">
        © {new Date().getFullYear()}, Joe Czarnecki
      </footer>
    </div>
  );
};

export default Layout;
