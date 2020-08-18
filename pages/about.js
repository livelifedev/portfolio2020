import { useState } from "react";
import Layout from "../src/components/layouts/Layout";
import styles from "./about.module.scss";

export default function About() {
  const [showHobbyText, setHobbyText] = useState("");
  const [selectedHobby, setSelectedHobby] = useState();
  const hobbies = [
    {
      name: "Technology",
      description:
        "I'm fascinated by how technology shapes the world, how fast it's progressing. I'm excited in the possibilities.",
    },
    { name: "Drawing", description: "" },
    {
      name: "Summer",
      description:
        "My favourite season, love the sun, love the beach, love chilling in a hammock on a tropical island.",
    },
    { name: "Morning Coffee", description: "" },
    {
      name: "Social Drinks",
      description:
        "Beers, maybe a rum and coke, some pub food, a good bunch of friends. It makes for a perfect pastime.",
    },
    {
      name: "Hiking",
      description:
        "Walking in nature, breathing in fresh air and being rewarded with beautiful scenery. Absolutely magical.",
    },
    {
      name: "Travel",
      description:
        "So many diverse countries and cultures, meeting people from all walks of life, it's an experience I'll always cherish.",
    },
  ];

  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <img src="/profile.jpg" alt="Profile" />
          </div>
          <div className={styles.bioText}>
            <h2>A Short Bio</h2>
            <div className="divider" />
            <p>
              Tech nerd, animation grad, curious mind, I'm many things. Spent
              the last few years of my life backpacking the world and now I
              spend my time head deep in coding.
            </p>
            <p>A little history about myself…</p>
            <p>
              Growing up I’ve always indulged myself in my imagination, doodling
              away on pieces of paper creating what was in my mind. Then when
              the family got our first computer spent countless hours tinkering
              away, breaking then fixing it. Long story short, I’d always had a
              love for art and technology, plus the curiosity to experiment with
              things and see what I could do with them.
            </p>
            <p>
              Now I'm pursuing that love of technology and seeing where the
              world of coding takes me.
            </p>
          </div>
        </div>
        <div className={styles.hobbies}>
          <h2>Things I like</h2>
          <div>
            {hobbies.map((hobby, index) => (
              <span key={hobby.name} onClick={() => setSelectedHobby(index)}>
                {hobby.name}
              </span>
            ))}
          </div>
          <p>{selectedHobby != null && hobbies[selectedHobby].description}</p>
        </div>
      </div>
    </Layout>
  );
}
