import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import GitHubIcon from "../GitHubIcon";
import LinkedInIcon from "../LinkedInIcon";
import styles from "./Layout.module.scss";

export default function Layout({ title, children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>John Rubio - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/john-m-rubio/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/livelifedev"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </section>
        <section className={styles.content}>{children}</section>
      </main>

      <Footer />
    </div>
  );
}
