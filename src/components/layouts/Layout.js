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
            {/* <img src="/linkedin.svg" alt="LinkedIn Logo" />
            <img src="/github.svg" alt="GitHub Logo" /> */}
            <div>
              <LinkedInIcon />
            </div>
            <div>
              <GitHubIcon />
            </div>
          </div>
        </section>
        <section className={styles.content}>{children}</section>
      </main>

      <Footer />
    </div>
  );
}
