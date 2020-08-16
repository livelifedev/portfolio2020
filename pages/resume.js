import Layout from "../src/components/layouts/Layout";
import styles from "./resume.module.scss";

export default function Resume() {
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
    <Layout title="Resume">
      <div className={styles.resume}>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <p>
            Technologies, languages and frameworks I've worked with as a web
            developer.
          </p>
          <ul>
            {skills.map((skill) => (
              <li className={styles.skillItems}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className={styles.experience}>
          <h2>Experience / Education</h2>
          <ul className={styles.timeline}>
            <li>
              <h2>Aetherworks (2020 - Present)</h2>
              <p>Contract - Front-End Developer</p>
            </li>
            <li>
              <h2>SMATA Technologies (2019 - 2020)</h2>
              <p>Full-Time - Front-End Developer</p>
            </li>
            <li>
              <h2>Rensa Health (2019)</h2>
              <p>Contract - Front-End Developer</p>
            </li>
            <li>
              <h2>SafetyCulture (2019)</h2>
              <p>Internship - Front-End Developer</p>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
