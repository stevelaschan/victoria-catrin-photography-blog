import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { css } from '@emotion/react';

const textStyle = css`
  p {
    margin: 8px 32px;
  }
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>About me</h1>
        <div css={textStyle}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/victoriacatrin/?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Victoria Catrin Photography</span>
        </a>
      </footer>
    </Layout>
  );
}
