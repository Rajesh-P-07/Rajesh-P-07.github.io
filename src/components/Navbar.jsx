import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <input type="checkbox" id={styles.navcheck} />
      <div className={styles.navheader}>
        <div className={styles.navtitle}>Rajesh Pachika</div>
      </div>
      <div className={styles.navbtn}>
        <label for={styles.navcheck}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class={styles.navlinks}>
        <a href="" >
          Home
        </a>
        <a href="" >
          About
        </a>
        <a href="" >
          skills
        </a>
        <a href="" >
          Projects
        </a>
        <a href="" >
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
