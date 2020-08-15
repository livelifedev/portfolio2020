import Layout from "../src/components/layouts/Layout";
import Carousel from "../src/components/Carousel";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <div>
          <h2>Projects Showcase</h2>
          <p>
            Highlights of my time studying web development - some are from my
            early days as a beginner and others are side projects I've done in
            my free time, trying out new technology or exploring ideas in my
            head.
          </p>
          <Carousel />
        </div>
      </div>
    </Layout>
  );
}
