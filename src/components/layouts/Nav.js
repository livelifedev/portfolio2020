import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../Logo";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { pathname, push } = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault();
    push(path);
  };

  const pageLink = (href, name) => {
    return (
      <a
        href={href}
        onClick={(e) => handleClick(e, href)}
        className={pathname == href ? styles.active : ""}
      >
        {name}
      </a>
    );
  };

  return (
    <header className={styles.nav}>
      <a href="/" onClick={(e) => handleClick(e, "/")}>
        <div className={styles.logoHeader}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <span>John Rubio</span>
        </div>
      </a>
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
          <li>{pageLink("/about", "About")}</li>
          <li>{pageLink("/portfolio", "Portfolio")}</li>
          <li>{pageLink("/resume", "Resume")}</li>
          <li>{pageLink("/contact", "Contact")}</li>
        </ul>
      </nav>

      {menuIsOpen && <div className={styles.shadow} />}
    </header>
  );
}
