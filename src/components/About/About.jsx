import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/21BEC7260.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              Proficient Full Stack Developer skilled in MERN (MongoDB, Express.js, React.js, Node.js), passionate about building dynamic, scalable, and user-friendly web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Research & Development (R&D) Enthusiast</h3>
              <p>
              Passionate R&D enthusiast exploring AI, Machine Learning, and Embedded Systems, aiming to drive innovation through impactful research.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & ML Engineer</h3>
              <p>
              AI & ML enthusiast with hands-on experience in Deep Learning, TensorFlow, and OpenCV, striving to develop intelligent solutions for real-world challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
