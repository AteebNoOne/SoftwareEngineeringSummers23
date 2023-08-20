import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import styles from "./Agile.module.css";

function Agile() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.bg_image}></div>
        <div className={styles.content}>
          <h1>Agile Model Overview</h1>
          <p>
            The Agile model is a set of principles and practices for software
            development that prioritize flexibility, collaboration, and customer
            value. It emphasizes iterative development and responsiveness to
            changing requirements.
          </p>
          <h2>Key Principles of Agile:</h2>
          <ul>
            <li>Individuals and Interactions over Processes and Tools</li>
            <li>Working Software over Comprehensive Documentation</li>
            <li>Customer Collaboration over Contract Negotiation</li>
            <li>Responding to Change over Following a Plan</li>
          </ul>
          <h2>Agile Methodologies:</h2>
          <p>
            There are several Agile methodologies, including Scrum, Kanban, and
            Extreme Programming (XP). These methodologies provide frameworks for
            implementing Agile practices in software development projects.
          </p>
          <p>
            In Scrum, for example, development is organized into time-bound
            iterations called sprints, with the goal of delivering a potentially
            shippable product increment at the end of each sprint.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Agile;
