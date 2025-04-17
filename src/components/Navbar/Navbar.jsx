import { getImgUrl } from "../../utils";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      <a className={styles.title} href="/">
        Portfoli<span className={styles.emphasisedText}>o</span>
      </a>
      <div className={styles.menu}>
        <img
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuBtn}
          src={menuOpen ? getImgUrl("/assets/nav/closeIcon.png") : getImgUrl("/assets/nav/menuIcon.png")}
          alt="Menu Button"
        />
        <div className={styles.menuListContainer}>
          <ul className={`${styles.menuList} ${menuOpen && styles.menuList + " " + styles.active}`} onClick={()=> setMenuOpen(false)}>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
