import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}></main>
    </Layout>
  );
}
