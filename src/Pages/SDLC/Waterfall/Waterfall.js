import React from "react";
import Header from "../../../Components/Header/Header";
import styles from './Waterfall.module.css'
import Footer from "../../../Components/Footer/Footer';

function Waterfall() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.bg_image}></div>
                <div className={styles.content}>
                    <h1>The Waterfall Model: A Linear Approach to Software Development</h1>
                    <p>By Maham Majid (<a href="https://github.com/maham1128">Github Profile</a>)</p>
                    <p>
                        The Waterfall model is one of the earliest and most structured approaches to software development.
                        Proposed in the 1970s, this model follows a linear and sequential process, resembling the
                        cascade-like flow of a waterfall. Let's dive into the key characteristics and stages of the Waterfall
                        model.
                    </p>
                    <h2>Key Characteristics:</h2>
                    <p>
                        The Waterfall model is characterized by its strict and phase-based progression. Each phase must be
                        completed before the next one begins, and there is no backtracking. This linear structure emphasizes
                        thorough documentation and planning before moving forward.
                    </p>
                    <h2>Stages of the Waterfall Model:</h2>
                    <ol>
                        <li>Requirements Gathering: The project's requirements are gathered and documented.</li>
                        <li>System Design: The overall system architecture is designed based on the requirements.</li>
                        <li>Implementation: The system is developed based on the design specifications.</li>
                        <li>Testing: The developed system is rigorously tested for defects and errors.</li>
                        <li>Deployment: The system is deployed and released to users.</li>
                        <li>Maintenance: Ongoing maintenance and support activities are carried out.</li>
                    </ol>
                    <h2>Benefits and Limitations:</h2>
                    <p>
                        The Waterfall model's structured approach allows for clear documentation and planning, making it suitable
                        for projects with well-defined requirements. However, its rigidity can be a drawback when changes are
                        needed after the initial phases.
                    </p>
                    <p>
                        In conclusion, the Waterfall model offers a disciplined and systematic way to approach software
                        development. While it may not be as flexible as newer methodologies, its emphasis on thorough planning
                        and documentation can lead to successful project outcomes.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Waterfall;
