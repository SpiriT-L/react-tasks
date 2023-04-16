import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink className={styles.link} to="/">
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink className={styles.link} to="forms">
                  Forms
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink className={styles.link} to="about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
