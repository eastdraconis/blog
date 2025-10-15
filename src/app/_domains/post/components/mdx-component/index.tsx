import { MDXRemote } from 'next-mdx-remote/rsc';
import * as styles from './style.css';
import Callout from './callout';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import rehypeImage from 'rehype-unwrap-images';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import React from 'react';
import { MDXComponents } from 'mdx/types';
import { DivideIcon } from './divide-icon';

export const components: MDXComponents = {
  h1: ({ children, ...rest }) => (
    <h1 className={styles.title1} {...rest}>
      {children}
    </h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2 className={styles.title2} {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 className={styles.title3} {...rest}>
      {children}
    </h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 className={styles.title4} {...rest}>
      {children}
    </h4>
  ),
  p: ({ children, ...rest }) => (
    <p {...rest} className={styles.paragraph}>
      {children}
    </p>
  ),
  a: ({ children, ...rest }) => (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  ),
  img: ({ alt, ...rest }) => (
    <figure style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Image {...rest} className={styles.image} width={900} height={500} alt={''} quality={100} />
      <figcaption>{alt}</figcaption>
    </figure>
  ),
  hr: () => (
    <section className={styles.hrWrapper}>
      <DivideIcon />
    </section>
  ),
  strong: ({ children, ...rest }) => (
    <strong className={styles.strong} {...rest}>
      {children}
    </strong>
  ),
  ol: ({ children, ...rest }) => (
    <ol className={styles.ol} {...rest}>
      {children}
    </ol>
  ),
  ul: ({ children, ...rest }) => (
    <ul className={styles.ul} {...rest}>
      {children}
    </ul>
  ),
  li: ({ children, ...rest }) => (
    <li className={styles.li} {...rest}>
      {children}
    </li>
  ),
  blockquote: ({ ...props }) => {
    return <Callout {...props} />;
  },
  code: (props) => {
    const { className, children, ...rest } = props;

    if (!rest['data-language']) {
      return (
        <code {...props} className={styles.code}>
          {children}
        </code>
      );
    }

    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  },
  Callout: (props) => <Callout {...props} />,
};

interface MDXComponentProps {
  source: string;
}

export const MDXComponent = ({ source }: MDXComponentProps) => {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            [rehypePrettyCode, { grid: false, theme: 'github-dark', bypassInlineCode: true }],
            rehypeSlug,
            rehypeImage,
          ],
        },
      }}
    />
  );
};
