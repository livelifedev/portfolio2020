import Layout from "../src/components/layouts/Layout";
import PortfolioCarousel from "../src/components/PortfolioCarousel";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <div className={styles.projects}>
          <h2>Projects Showcase</h2>
          <p>Highlights of my time studying web development -</p>
          <p>
            Some are from my early days as a beginner and others are side
            projects I've done to try out new technologies or explore ideas in
            my head.
          </p>
          <PortfolioCarousel>
            <div className={styles.slide} style={{ display: "flex" }}>
              <div style={{ minWidth: "100%" }}>
                <div className={`${styles.slideItem} ${styles.card1}`}>
                  <span>Slide 1</span>
                </div>
                <div className={`${styles.slideItem} ${styles.card2}`}>
                  <p>
                    <a>GitHub</a>
                    <a>Deployed</a>
                  </p>
                </div>
              </div>
              <div style={{ minWidth: "100%" }}>Slide 2</div>
              <div style={{ minWidth: "100%" }}>Slide 3</div>
            </div>
          </PortfolioCarousel>
        </div>
      </div>
    </Layout>
  );
}
