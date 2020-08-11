import Layout from "../src/components/layouts/Layout";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className={styles.contact}>
        <div>
          <h2>Welcome to my online profile.</h2>
          <p>Interactive text</p>
        </div>
      </div>
    </Layout>
  );
}
