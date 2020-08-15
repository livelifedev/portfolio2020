import Layout from "../src/components/layouts/Layout";
import Carousel from "../src/components/Carousel";
import styles from "./portfolio.module.scss";

export default function Portfolio() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "REST",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Ruby",
    "Ruby on Rails",
    "Git",
    "Agile",
  ];

  return (
    <Layout title="Portfolio">
      <div className={styles.portfolio}>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <p>
            Technologies, languages and frameworks I've worked with as a web
            developer.
          </p>
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>

        <div className={styles.experience}>
          <h2>Experience</h2>
          <p>
            Technology, languages and frameworks I've worked with as a web
            developer.
          </p>
          <div></div>
        </div>

        <div className={styles.projects}>
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
