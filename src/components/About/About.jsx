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
              <h3>Software Engineer</h3>
              <p>
              Aspiring software engineer fueled by passion and determination, ready to turn code into creative solutions that redefine possibilities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              Aspiring web developer driven by creativity and precision, poised to weave digital experiences that captivate and innovate.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & ML</h3>
              <p>
              Aspiring AI & ML enthusiast with a thirst for knowledge, geared to unlock the mysteries of data and create intelligent systems that shape the future.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};