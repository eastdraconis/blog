import { MDXRemote } from 'next-mdx-remote/rsc';
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
import { css } from '../../../../../../styled-system/css';

export const components: MDXComponents = {
  h1: ({ children, ...rest }) => (
    <h1 className={css({
  fontSize: '2rem',
  marginTop: '4rem',
  textWrap: 'wrap',
  marginBottom: '2rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
})} {...rest}>
      {children}
    </h1>
  ),
  h2: ({ children, ...rest }) => (
    <h2 className={css({
  fontSize: '1.75rem',
  marginTop: '3rem',
  textWrap: 'wrap',
  marginBottom: '1rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
})} {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 className={css({
  fontSize: '1.5rem',
  marginTop: '2rem',
  marginBottom: '1rem',
  textWrap: 'wrap',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
  '@media (max-width: 768px)': {
    fontSize: '1.25rem',
  },
})} {...rest}>
      {children}
    </h3>
  ),
  h4: ({ children, ...rest }) => (
    <h4 className={css({
  fontSize: '1.25rem',
  marginTop: '2rem',
  textWrap: 'wrap',
  marginBottom: '1rem',
  marginInline: 'auto',
  fontWeight: 'bold',
  lineHeight: 1.55,
  maxWidth: '640px',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
})} {...rest}>
      {children}
    </h4>
  ),
  p: ({ children, ...rest }) => (
    <p className={css({
  fontSize: '18px',
  textWrap: 'wrap',
  marginBottom: '1rem',
  wordBreak: 'keep-all',
  marginInline: 'auto',
  lineHeight: 1.55,
  maxWidth: '640px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
})} {...rest}>
      {children}
    </p>
  ),
  a: ({ children, ...rest }) => (
    <a className={css({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: 1.55,
  textDecoration: 'underline',
  position: 'relative',
  _hover: {
    color: '#b6d0eb',
  },
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
})} {...rest}>
      {children}
    </a>
  ),
  img: ({ alt, ...rest }) => (
    <figure className={css({
  marginTop: '2rem',
  marginBottom: '2rem',
})}>
      <Image {...rest} className={css({
  height: 'auto',
  width: '100%',
  objectFit: 'cover',
  maxWidth: '900px',
  marginInline: 'auto',
  borderRadius: '12px',
  _hover: {
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-out',
  },
})} width={900} height={500} alt={alt ?? ''} quality={100} />
      <figcaption>{alt}</figcaption>
    </figure>
  ),
  hr: () => (
    <section className={css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '40px 0',
})}>
      <DivideIcon />
    </section>
  ),
  strong: ({ children, ...rest }) => (
    <strong className={css({
  fontWeight: 700,
})} {...rest}>
      {children}
    </strong>
  ),
  ol: ({ children, ...rest }) => (
    <ol className={css({
  maxWidth: '640px',
  fontSize: '18px',
  marginTop: '15px',
  marginBottom: '15px',
  marginInline: 'auto',
  listStyleType: 'decimal',
  listStylePosition: 'inside',
  '&::marker': {
    fontWeight: 'bold',
  },
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
})} {...rest}>
      {children}
    </ol>
  ),
  ul: ({ children, ...rest }) => (
    <ul className={css({
  maxWidth: '640px',
  fontSize: '18px',
  marginTop: '15px',
  marginBottom: '15px',
  marginInline: 'auto',
  listStyleType: 'disc',
  listStylePosition: 'inside',
  '& ul': {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingLeft: '1.5rem',
    listStyle: 'circle',
  },
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
})} {...rest}>
      {children}
    </ul>
  ),
  li: ({ children, ...rest }) => (
    <li className={css({
  lineHeight: '32px',
})} {...rest}>
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
        <code {...props} className={css({
  padding: '2px 4px',
  borderRadius: '4px',
  backgroundColor: 'rgba(241, 240, 236, 1)',
  fontSize: '14px',
  textWrap: 'nowrap',
  lineHeight: 1.55,
  color: '#ee6f8b',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
})}>
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
    <div className={css({
  '& code[data-line-numbers]': {
    counterReset: 'line',
  },
  '& code[data-line-numbers] > [data-line]::before': {
    counterIncrement: 'line',
    content: 'counter(line)',
    display: 'inline-block',
    width: '0.75rem',
    marginRight: '16px',
    textAlign: 'right',
    color: 'gray',
  },
  '& pre + figcaption': {
    maxWidth: '640px',
    marginInline: 'auto',
    marginBottom: '2rem',
  },
  '& figure > pre': {
    borderRadius: '8px',
    maxWidth: '640px',
    marginInline: 'auto',
    paddingBlock: '16px !important',
    paddingInline: '8px !important',
    overflow: 'auto',
    fontSize: '16px',
    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
  },
  '& figure > figcaption': {
    marginTop: '16px',
    color: '#868b94',
    fontSize: '12px',
    textAlign: 'center',
  },
  '& pre:not(:has(+ figcaption))': {
    marginBottom: '2rem',
  },
  '& ul ul': {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingLeft: '1.5rem',
    listStyle: 'circle',
  },
  '& ol ol': {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingLeft: '1.5rem',
    listStyle: 'lower-alpha',
  },
})}>
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
    </div>
  );
};
