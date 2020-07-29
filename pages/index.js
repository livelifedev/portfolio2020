import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <section className={styles.home}>Landing</section>
    </Layout>
  );
}
