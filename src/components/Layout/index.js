import React, { Fragment } from "react";
import styles from "./index.module.scss";

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="menuToggler"
        className={`${styles.input_toggler}`}
      />
      <label htmlFor="menuToggler" className={styles.menu_toggler}>
        <span className={styles.menu_toggler__line}></span>
        <span className={styles.menu_toggler__line}></span>
        <span className={styles.menu_toggler__line}></span>
      </label>
      <aside className={styles.sidebar}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Home
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Album 1
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Album 2
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Album 3
            </a>
          </li>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="#">
              Contact
            </a>
          </li>
        </ul>
      </aside>
      <a
        href="https://longstoryshortdesign.co.uk/contact"
        className={styles.contactButton}
      >
        Contact
      </a>
      <main className={`${styles.content} `}>{props.children}</main>
    </div>
  );
};

export default Layout;
