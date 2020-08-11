import Layout from "../src/components/layouts/Layout";
import styles from "./about.module.scss";

export default function About() {
  return (
    <Layout title="About">
      <div className={styles.about}>
        <div>
          <h2>Welcome to my online profile.</h2>
          <p>Interactive text</p>
        </div>
      </div>
    </Layout>
  );
}
