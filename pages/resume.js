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
              <li className={styles.skillItems} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.experience}>
          <div>
            <h2>Experience</h2>
            <ul className={styles.timeline}>
              <li>
                <h3>Aetherworks (2020 - Present)</h3>
                <p>Contract - Front-End Developer</p>
              </li>
              <li>
                <h3>SMATA Technologies (2019 - 2020)</h3>
                <p>Full-Time - Front-End Developer</p>
              </li>
              <li>
                <h3>Rensa Health (2019)</h3>
                <p>Contract - Front-End Developer</p>
              </li>
              <li>
                <h3>SafetyCulture (2019)</h3>
                <p>Internship - Front-End Developer</p>
              </li>
            </ul>
          </div>

          <div>
            <h2>Education</h2>
            <div className={styles.resume}>
              <div>
                <h3>Coder Academy</h3>
                <p>Diploma of IT in Web Development</p>
              </div>
              <div>
                <h3>Team Treehouse</h3>
                <p>Front End Web Development Track</p>
              </div>
              <div>
                <h3>SAE Institute</h3>
                <p>Bachelor of Interactive Media in VFX & Animation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
