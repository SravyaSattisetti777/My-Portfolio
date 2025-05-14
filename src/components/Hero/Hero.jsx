import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Sravya</h1>
        <p className={styles.description}>
        I’m Sravya Sattisetti, an enthusiastic B.Tech student passionate about Full Stack Web Development, AI & ML, and Software Development. I thrive on transforming ideas into real-world solutions by applying my knowledge of Computer Science and Emerging Technologies. With a strong focus on practical learning, I continuously explore new tools, frameworks, and technologies to build impactful projects. My interest in open-source contributions and research development drives me to create innovative solutions that can solve real-world challenges. I’m always eager to collaborate, innovate, and contribute to projects that make a difference. 🚀💡
        </p>
        <a href="https://drive.google.com/file/d/1h0BIvdyRz61hCVJUa1EvwDrrEBpUd53q/view?usp=sharing" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/image (7).webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
