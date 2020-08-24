import Layout from "../src/components/layouts/Layout";
import PortfolioCarousel from "../src/components/PortfolioCarousel";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  const projects = [
    {
      title: "Portfolio 2020",
      github: "https://github.com/livelifedev/portfolio2020",
      deployed: "https://livelifedev.github.io/",
    },
    {
      title: "Portfolio 2019",
      github: "https://github.com/livelifedev/livelifedev.github.io",
      deployed: "https://livelifedev.github.io/",
    },
    {
      title: "Digital Pet Game",
      github: "https://github.com/livelifedev/pigeon",
      github2: "https://github.com/livelifedev/pigeon-backend",
      deployed: "https://pigeon-guild.herokuapp.com/",
    },
    {
      title: "Story Project",
      github: "https://github.com/livelifedev/story-project",
      deployed: "https://story-project.vercel.app/",
    },
    {
      title: "Calorie Tracker",
      github: "https://github.com/livelifedev/food-nutri-v2",
      deployed: "https://nutrition-demo-app.herokuapp.com/",
    },
    {
      title: "Dog Training Website (Team Project)",
      github: "https://github.com/livelifedev/dogs-react",
      github2: "https://github.com/livelifedev/dogs-express",
      deployed:
        "http://react-keep-static.s3-website-ap-southeast-2.amazonaws.com/",
    },
    {
      title: "Student Digital Library (Team Project)",
      github: "https://github.com/livelifedev/team-cool",
      deployed: "https://lib-u.herokuapp.com/",
    },
  ];

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
            <div className={styles.slide}>
              {projects.map((x) => (
                <div>
                  <div className={`${styles.slideItem} ${styles.card1}`}>
                    <span>{x.title}</span>
                  </div>
                  <div className={`${styles.slideItem} ${styles.card2}`}>
                    <div>
                      <a
                        className="externalLink"
                        href={x.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        GitHub{x.github2 && "(FE)"}
                      </a>
                      {x.github2 && (
                        <a
                          className="externalLink"
                          href={x.github2}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          GitHub(BE)
                        </a>
                      )}
                      <a
                        className="externalLink"
                        href={x.deployed}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Deployed
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PortfolioCarousel>
        </div>
      </div>
    </Layout>
  );
}
