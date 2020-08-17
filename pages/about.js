import Layout from "../src/components/layouts/Layout";
import styles from "./about.module.scss";

export default function About() {
  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.profilePhoto}>
          <img src="/profile.jpg" alt="Profile" />
        </div>
        <div className={styles.bioText}>
          <h2>A Short Bio</h2>
          <hr></hr>
          <p>
            Tech nerd, animation grad, curious mind, I'm many things. Spent the
            last few years of my life backpacking the world and now I spend my
            time head deep in coding.
          </p>
          <p>A little history about myself…</p>
          <p>
            Growing up I’ve always indulged myself in my imagination, doodling
            away on pieces of paper creating what was in my mind. Then when the
            family got our first computer spent countless hours tinkering away,
            breaking then fixing it. Long story short, I’d always had a love for
            art and technology, plus the curiosity to experiment with things and
            see what I could do with them.
          </p>
          <p>
            Now I'm pursuing that love of technology and seeing where the world
            of coding takes me.
          </p>
        </div>
      </div>
    </Layout>
  );
}
