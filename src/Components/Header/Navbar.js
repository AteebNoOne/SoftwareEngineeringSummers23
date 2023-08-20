import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_button1}>
        <NavLink to="/"><button className={styles.button}>Home</button></NavLink>
      </div>
      <div className={styles.nav_button1}>
      <NavLink to="/sdlc/agile">
        <button className={styles.button}>Agile</button>
        </NavLink>
      </div>
      <div className={styles.nav_button1}>
      <NavLink to="/sdlc/spiral">
        <button className={styles.button}>Spiral</button>
        </NavLink>
      </div>
      <div className={styles.nav_button1}>
      <NavLink to="/sdlc/waterfall">
        <button className={styles.button}>Waterfall</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
