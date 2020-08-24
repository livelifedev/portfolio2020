import { useState } from "react";
import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  const [light, setLight] = useState(false);

  return (
    <Layout title="Welcome">
      <div className={styles.home}>
        <div className={styles.welcomeWrapper}>
          <div>
            <h2>I'm a Web Developer</h2>
            <div className={light ? "" : styles.dim}>
              <p>I build things.</p>
              <p>I break things.</p>
              <p>I make it daily duty to do so.</p>
            </div>
          </div>
          <div>
            <h3>Latest.</h3>
            <a
              className="externalLink"
              href="https://johnrubio.tech/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Updated portfolio website.
            </a>
          </div>
        </div>
        <div
          className={styles.mascotWrapper}
          onClick={() => setLight((prev) => !prev)}
        >
          {light && <div className={styles.lightGlow} />}
          <img src="/logo.svg" alt="Logo" className={light ? "" : styles.dim} />
        </div>
      </div>
    </Layout>
  );
}
