import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sourav Kumar Singh</h1>
        <p className={styles.description}>
          I'm a Data Science Engineer and MERN Developer with experience of projects using Python, R programming, PowerBI ,React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1Wv0GEz_7_A_M4Pl9HAaRQnhLANx3iVKB/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};