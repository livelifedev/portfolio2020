import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout title="Web Developer">
      <div className={styles.home}>
        <div>
          <div>
            <h2>Welcome to my online profile.</h2>
            <p>Interactive text</p>
          </div>
          <div>
            <h3>Latest.</h3>
            <p>Link to latest update</p>
          </div>
        </div>

        <div className={styles.mascot_wrapper}>
          <img src="/mascot.svg" alt="Mascot" className={styles.mascot} />
        </div>
      </div>
    </Layout>
  );
}
