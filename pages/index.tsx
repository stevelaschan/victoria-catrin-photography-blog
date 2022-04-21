import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { css } from '@emotion/react';

const containerStyle = css`
  margin-top: 18px;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Welcome to Victoria Catrin Photography</h1>
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
      </div>
    </Layout>
  );
};

export default Home;
