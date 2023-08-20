import React from "react";
import styles from './Error.module.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Error(){
    return(
        <div className={styles.container}>
            <Header />
            <h1>404 not found</h1>
            <Footer />
        </div>
    );
};

export default Error;