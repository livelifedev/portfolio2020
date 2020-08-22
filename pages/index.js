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
            <p>I build things.</p>
            <p>I break things.</p>
            <p>I make it daily duty to do so.</p>
          </div>
          <div>
            <h3>Latest.</h3>
            <a>Link to latest update</a>
          </div>
        </div>
        <div className={styles.mascotWrapper}>
          {light && <div className={styles.lightGlow} />}
          <img src="/logo.svg" alt="Logo" className={light ? "" : styles.dim} />
          <div
            className={styles.lightSwitch}
            onClick={(event) => {
              console.log(event);
              setLight((prev) => !prev);
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}

//inspire, create, learn. solve, flip the switch
