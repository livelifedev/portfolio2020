import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
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
      <nav className={styles.menu}>
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
