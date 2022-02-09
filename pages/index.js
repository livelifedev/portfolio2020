import Layout from "../src/components/layouts/Layout";
import Logo from "../src/components/Logo";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className={styles.home}>
        <div className={styles.welcomeWrapper}>
          <div>
            <h2>Hi, I'm a Software Engineer</h2>
            <div>
              <p>I build things.</p>
              <p>I break things.</p>
              <p>I make it my daily duty to do so.</p>
            </div>
          </div>
          <div>
            <h3>Latest.</h3>
            <a
              className="externalLink"
              href="https://github.com/livelifedev/responsive-vanilla"
              target="_blank"
            >
              WIP new website.
            </a>
          </div>
        </div>

        <div className={styles.mascotWrapper}>
          <div className={styles.lightGlow}>
            <h3>I've got bright ideas!</h3>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
    </Layout>
  );
}
