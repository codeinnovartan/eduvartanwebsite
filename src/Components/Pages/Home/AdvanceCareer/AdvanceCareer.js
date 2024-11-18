import React from "react";
import styles from "./AdvanceCareer.module.css";

const AdvanceCareer = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.backgroundEclips}></div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Advance Your <span className={styles.highlight}>Career</span>{" "}
                with Our Faculty{" "}
                <span className={styles.highlight}>Training</span> Program
              </h1>
              <p className={styles.description}>
                Boost your teaching career with specialized training designed
                for growth and success.
              </p>
              <div className={styles.ctaContainer}>
                <button className={styles.demoButton}>Get Certified</button>
                <button className={styles.demoButtonMobile}>
                  Start your Journey <i class="fa-solid fa-xs fa-chevron-right"></i>
                </button>
                <button className={styles.loginButton}>Contact Us</button>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="./Images/advanceImage.png"
                alt="Faculty training program illustration"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvanceCareer;
