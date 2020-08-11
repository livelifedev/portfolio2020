import Layout from "../src/components/layouts/Layout";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <div>
          <h2>Welcome to my online profile.</h2>
          <p>Interactive text</p>
        </div>
      </div>
    </Layout>
  );
}
