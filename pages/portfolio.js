import Layout from "../src/components/layouts/Layout";
import EmblaCarousel from "../src/components/EmblaCarousel";
import styles from "./portfolio.module.scss";

const projects = [
  {
    title: "Ecommerce Website",
    github: "https://github.com/livelifedev/home-edvantage",
    github2: "https://github.com/livelifedev/home-edvantage-cms-stable",
    deployed: "https://home-edvantage-prototype.vercel.app/",
  },
  {
    title: "My Sketchbook",
    github: "https://github.com/livelifedev/livelifedev.github.io",
    deployed: "https://livelifedev.github.io/",
  },
  {
    title: "Responsive Layout",
    github: "https://github.com/livelifedev/responsive-vanilla",
    deployed: "https://vanilla-responsive.netlify.app",
  },
  {
    title: "Portfolio",
    github: "https://github.com/livelifedev/portfolio2020",
    deployed: "https://livelifedev.github.io/portfolio2020",
  },
  {
    title: "Digital Pet Game",
    github: "https://github.com/livelifedev/pigeon",
    github2: "https://github.com/livelifedev/pigeon-backend",
    deployed: "https://pigeon-guild.herokuapp.com/",
  },
  {
    title: "Calorie Tracker",
    github: "https://github.com/livelifedev/food-nutri-v2",
    deployed: "https://nutrition-demo-app.herokuapp.com/",
  },
  {
    title: "Web Player",
    github: "https://github.com/livelifedev/web-player",
    deployed: "https://johnrdev.github.io/",
  },
];

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <h2>Projects Showcase</h2>
        <p>Highlights of my time studying web development -</p>
        <p>
          Some are from my early days as a beginner and others are side projects
          I've done to explore different technologies and fun ideas floating
          around in my head.
        </p>

        <EmblaCarousel>
          {projects.map((x, index) => (
            <article className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <div className={styles.embla__slide__img}>
                  <div
                    className={`${styles.embla__slide__item} ${
                      styles.imageCard
                    } ${styles["id" + index]}`}
                  >
                    <h4>{x.title}</h4>
                  </div>

                  <div
                    className={`${styles.embla__slide__item} ${styles.textCard}`}
                  >
                    <div>
                      <a
                        className="externalLink"
                        href={x.github}
                        target="_blank"
                      >
                        GitHub{x.github2 && "(FE)"}
                      </a>
                      {x.github2 && (
                        <a
                          className="externalLink"
                          href={x.github2}
                          target="_blank"
                        >
                          GitHub(BE)
                        </a>
                      )}
                      <a
                        className="externalLink"
                        href={x.deployed}
                        target="_blank"
                      >
                        Deployed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </EmblaCarousel>

        <p>
          You can check out my personal GitHub{" "}
          <a href="https://github.com/livelifedev" target="_blank">
            @livelifedev
          </a>
        </p>
      </div>
    </Layout>
  );
}
