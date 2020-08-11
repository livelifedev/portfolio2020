import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>John Rubio - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className={styles.title}>
          <h1>Web Developer</h1>
        </section>
        <section className={styles.content}>{children}</section>
      </main>

      <Footer />
    </div>
  );
}
