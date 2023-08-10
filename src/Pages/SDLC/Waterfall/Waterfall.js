import React from "react";
import Header from "../../../Components/Header/Header";
import styles from './Waterfall.module.css'
import Footer from "../../../Components/Footer/Footer";

function Waterfall() {
    return (
        <>
                    <Header />
        <div className={styles.container}>
            <div className={styles.bg_image}></div>
            <div className={styles.content}>
            <h1>Waterfall model content goes here</h1>
            <ul>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
                <li>Bla bla</li>
            </ul>
            </div>
        </div>
        <Footer />
        </>
    );

}
export default Waterfall;