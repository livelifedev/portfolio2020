import Layout from "../src/components/layouts/Layout";
import PortfolioCarousel from "../src/components/PortfolioCarousel";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <div className={styles.projects}>
          <h2>Projects Showcase</h2>
          <p>
            Highlights of my time studying web development - some are from my
            early days as a beginner and others are side projects I've done in
            my free time, trying out new technology or exploring ideas in my
            head.
          </p>
          <PortfolioCarousel />
        </div>
      </div>
    </Layout>
  );
}
