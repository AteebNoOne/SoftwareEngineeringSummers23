import React from "react";
import Header from "../../../Components/Header/Header";
import styles from './Spiral.module.css'
import Footer from "../../../Components/Footer/Footer";

function Spiral() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.bg_image}></div>
                <div className={styles.content}>
                    <h1>The Spiral Model in Software Engineering</h1>
                    <p>
                        The Spiral model is a software development process model that combines elements of both the waterfall model and iterative development. It was introduced by Barry Boehm in 1986 and is known for its iterative and risk-driven approach to software development.
                    </p>
                    <p>
                        The Spiral model consists of a series of iterations, or "spirals," each of which represents a phase in the software development life cycle. These phases typically include planning, risk analysis, engineering, testing, and evaluation. The model is characterized by its emphasis on identifying and mitigating risks early in the development process.
                    </p>
                    <p>
                        One of the key features of the Spiral model is its flexibility. It allows for incremental development and the incorporation of changes as the project progresses. Each spiral iteration builds upon the previous ones, and the project gradually evolves based on user feedback and changing requirements.
                    </p>
                    <p>
                        Raffayali, the author of this article, is a software engineer with a passion for software development methodologies and best practices. You can find more of their work on their GitHub profile: <a href="https://www.github.com/raffayali">github.com/raffayali</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Spiral;
