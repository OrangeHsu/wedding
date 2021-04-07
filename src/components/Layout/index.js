import React, { Fragment, useState, useCallback } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Layout = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = useCallback(() => {
    setToggle(!toggle);
  });
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="menuToggler"
        className={`${styles.input_toggler} ${toggle ? styles.checked : ""}`}
      />
      <label
        htmlFor="menuToggler"
        className={styles.menu_toggler}
        onClick={handleClick}
      >
        <span className={styles.menu_toggler__line}></span>
        <span className={styles.menu_toggler__line}></span>
        <span className={styles.menu_toggler__line}></span>
      </label>
      <aside className={styles.sidebar}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/#">
              Home
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/events">
              Events
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/story">
              Our Story
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/photo">
              Photo
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </aside>
      <Link to="/contact" className={styles.contactButton}>
        Contact
      </Link>
      <main
        className={`${styles.content} `}
        onClick={() => {
          setToggle(false);
        }}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
