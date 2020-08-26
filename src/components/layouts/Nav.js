import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <Link href="/">
        <a>
          <div className={styles.logoHeader}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <span>John Rubio</span>
          </div>
        </a>
      </Link>
      <div className={styles.openButton} onClick={() => setMenuIsOpen(true)}>
        <span>&#8636;</span>
      </div>
      <nav className={`${styles.menu} ${menuIsOpen ? styles.menuActive : ""}`}>
        <div
          className={styles.closeButton}
          onClick={() => setMenuIsOpen(false)}
        >
          <span>&#8640;</span>
        </div>
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

      {menuIsOpen && <div className={styles.shadow} />}
    </header>
  );
}
