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

      {children}

      <Footer />
    </div>
  );
}
