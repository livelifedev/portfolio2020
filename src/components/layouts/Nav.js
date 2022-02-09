import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import styles from "./Nav.module.scss";

export default function Nav({ currentPath }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.nav}>
      <Link href={{ pathname: "/" }}>
        <a>
          <div className={styles.logoHeader}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <span>John Rubio</span>
          </div>
        </a>
      </Link>

      <button
        className={styles.openButton}
        aria-label="Open menu"
        onClick={() => setMenuIsOpen(true)}
      >
        <span>&#8636;</span>
      </button>

      <nav className={`${styles.menu} ${menuIsOpen ? styles.menuActive : ""}`}>
        <button
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={() => setMenuIsOpen(false)}
        >
          <span>&#8640;</span>
        </button>

        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={{ pathname: link.path }}>
                <a className={currentPath == link.path ? styles.active : ""}>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {menuIsOpen && <div className={styles.shadow} />}
    </header>
  );
}
