import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown'
import styles from "../../styles/BlogPost.module.css";
import rehypeHighlight from 'rehype-highlight'
import Head from 'next/head'
import Script from 'next/script'

// The page for each post
export default function BlogPost({frontmatter, content}) {

    const {title, author, category, date, bannerImage, tags} = frontmatter

        //<h3>{category} || {tags.join()}</h3>
    return (
        <main className={styles.main}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8MKPZRSWXX"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8MKPZRSWXX');
              `}
            </Script>
            <Head>
                <link rel="stylesheet"
                      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github-dark.min.css"/>
            </Head>
            <h1>{title}</h1>
            <p>{author} | {date}</p>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
        </main>
    );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
