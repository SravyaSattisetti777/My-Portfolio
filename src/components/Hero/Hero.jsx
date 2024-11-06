import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Sravya</h1>
        <p className={styles.description}>
        This is Sravya Sattisetti, As an enthusiastic student, I'm extremely passionate about building a career that allows me to bring my knowledge of Computer Science, Software Development, Web Development, and AI & ML ideas into practical work. I'm currently actively pursuing and mastering various skills and languages!
        </p>
        <a href="https://drive.google.com/file/d/1uFd5oJw7uatbsGuvTxF8li-rut4NPVDT/view?usp=sharing" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/profileImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
