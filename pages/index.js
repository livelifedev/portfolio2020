import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className={styles.home}>
        <div className={styles.welcomeWrapper}>
          <div>
            <h2>I am a Web Developer</h2>
            <p>I build things.</p>
            <p>I break things.</p>
            <p>I make it daily duty to do so.</p>
          </div>
          <div>
            <h3>Latest.</h3>
            <p>Link to latest update</p>
          </div>
        </div>
        <div className={styles.switchButton}>
          <button>Turn it on</button>
        </div>
        <div className={styles.mascotWrapper}>
          <img src="/logo.svg" alt="Logo" />
        </div>
      </div>
    </Layout>
  );
}

//inspire, create, learn. solve, flip the switch
