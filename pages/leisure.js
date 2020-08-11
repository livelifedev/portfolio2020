import Layout from "../src/components/layouts/Layout";
import styles from "./leisure.module.scss";

export default function Leisure() {
  return (
    <Layout title="Leisure">
      <div className={styles.leisure}>
        <div>
          <h2>Welcome to my online profile.</h2>
          <p>Interactive text</p>
        </div>
      </div>
    </Layout>
  );
}
