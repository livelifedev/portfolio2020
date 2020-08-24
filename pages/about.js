import { useState } from "react";
import Layout from "../src/components/layouts/Layout";
import styles from "./about.module.scss";

export default function About() {
  const [selectedHobby, setSelectedHobby] = useState();
  const hobbies = [
    {
      icon: "laptop.svg",
      name: "Technology",
      description:
        "I'm fascinated by how technology shapes the world, how fast it's progressing. I'm excited in the possibilities.",
    },
    {
      icon: "pencil.svg",
      name: "Drawing",
      description:
        "I've always had a big imagination, drawing gives me the ability to express it visually and share with others.",
    },
    {
      icon: "sun.svg",
      name: "Summer",
      description:
        "My favourite season, love the sun, love the beach, love chilling in a hammock on a tropical island.",
    },
    {
      icon: "coffee.svg",
      name: "Coffee",
      description:
        "Taking a stroll to the cafe and grabbing a cappuccino is the best way to start the day.",
    },
    {
      icon: "beer.svg",
      name: "Drinks",
      description:
        "Beers, maybe a rum and coke, some pub food, a good bunch of friends. It makes for a perfect pastime.",
    },
    {
      icon: "mountain.svg",
      name: "Hiking",
      description:
        "Walking in nature, breathing in fresh air and being rewarded with beautiful scenery. Absolutely magical.",
    },
    {
      icon: "travel.svg",
      name: "Travel",
      description:
        "So many diverse countries and cultures, meeting people from all walks of life, it's an experience I'll always cherish.",
    },
  ];

  const handleHobbyClick = (value) => {
    value == selectedHobby ? setSelectedHobby() : setSelectedHobby(value);
  };

  return (
    <Layout title="About">
      <div className={styles.about}>
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            <img src="/profile.jpg" alt="Profile" />
            <div className={styles.placeholder}></div>
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
              away, breaking then fixing it.
            </p>
            <p>
              Long story short, I’d always had a love for art and technology,
              plus the curiosity to experiment with things and see what I could
              do with them.
            </p>
            <p>
              Now I'm pursuing that love of technology and seeing where the
              world of coding takes me.
            </p>
          </div>
        </div>
        <div className={styles.hobbies}>
          <h2>Things I like</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li
                key={hobby.name}
                onClick={() => handleHobbyClick(index)}
                className={index == selectedHobby ? styles.active : ""}
              >
                <div className={styles.iconWrapper}>
                  <img src={`/hobbies/${hobby.icon}`} />
                </div>
              </li>
            ))}
          </ul>
          <div className="divider" />
          {selectedHobby != null && (
            <p>
              <span className={styles.iconLabel}>
                {hobbies[selectedHobby].name}:
              </span>
              <span> {hobbies[selectedHobby].description}</span>
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
