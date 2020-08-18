import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className={styles.home}>
        <div>
          <div>
            <h2>I am a Web Developer.</h2>
            <p>I build things.</p>
          </div>
          <div>
            <h3>Latest.</h3>
            <p>Link to latest update</p>
          </div>
        </div>

        <div className={styles.mascotWrapper}>
          <img src="/logo.svg" alt="Logo" className={styles.mascot} />
        </div>
      </div>
    </Layout>
  );
}
