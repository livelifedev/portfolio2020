import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className={styles.nav}>
      <Link href="/">
        <a>
          <div className={styles.logoHeader}>
            <img src="/logo.svg" alt="Logo" />
            <span>John Rubio</span>
          </div>
        </a>
      </Link>
      <div className={styles.openButton} onClick={() => setMenuIsOpen(true)}>
        <span>&#8636;</span>
      </div>
      <nav className={`${styles.menu} ${menuIsOpen ? styles.menuActive : ""}`}>
        <button className={styles.button} onClick={() => setMenuIsOpen(false)}>
          <span>&#8640;</span>
        </button>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
