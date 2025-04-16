import { getImgUrl } from "../../utils";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <a className={styles.title} href="/">Portfoli<span className={styles.emphasisedText}>o</span></a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImgUrl("/assets/nav/menuIcon.png")}
          alt="Menu Button"
        />
        <ul className={styles.menuList}>
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
  );
};

export default Navbar;
