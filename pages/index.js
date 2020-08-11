import Layout from "../src/components/layouts/Layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout title="Web Developer">
      <div className={styles.home}>
        <div>Text</div>
        <div>Artwork</div>
      </div>
    </Layout>
  );
}
