import React from "react";
import logo from '../../assets/logo.png'
import Navbar from "./Navbar";
import styles from './Header.module.css';

function Header() {
    return(
        <header>
            <div className={styles.logo}>
            <img src={logo} alt="my logo"></img>
            </div>
                <h1 className={styles.heading}>Software Engineering</h1>
            <div className={styles.navbar}>
            <Navbar />
            </div>
        </header>
    );
};
export default Header;