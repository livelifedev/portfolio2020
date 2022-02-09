import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import GitHubIcon from "../GitHubIcon";
import LinkedInIcon from "../LinkedInIcon";
import styles from "./Layout.module.scss";

export default function Layout({ title, children }) {
  const { pathname } = useRouter();

  return (
    <div className={styles.layout}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>John Rubio - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal website as a web developer."
        />
      </Head>

      <Nav currentPath={pathname} />

      <main className={styles.main}>
        <section className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/john-m-rubio/" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/livelifedev" target="_blank">
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
