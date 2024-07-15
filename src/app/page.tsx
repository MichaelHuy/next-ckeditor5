'use client'

import 'ckeditor5/ckeditor5.css';
import './App.css'

import Image from "next/image";
import dynamic from 'next/dynamic'
import styles from "./page.module.css";

// const TextEditor = dynamic(() => import('./Components/TextEditor'), {
//   ssr: false,
// })

const CustomEditor = dynamic(() => {
  return import('./components/CustomEditor');
}, { ssr: false });

export default function Home() {

  const getDataEditor = (data: any) => {
    console.log('getDataEdirot: ' + JSON.stringify(data))

  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <CustomEditor
        getDataEditor={getDataEditor}
        initialData='<h1>Hello from CKEditor in Next.js!</h1>'
      />

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/client"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            /client
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="/ckeditor"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            ckeditor
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Home
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
