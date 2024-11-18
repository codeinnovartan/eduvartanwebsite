import React from "react";
import styles from "./YourPath.module.css";

const YourPath = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your Path to{" "}
        <span style={{ color: "rgba(243,100,33,1)" }}>Teaching</span> Excellence
      </h1>
      <p className={styles.description}>
        Your gateway to advanced Faculty training and career excellence. Empower
        yourself with our specialised Faculty training courses.
      </p>
      <div className={styles.heroSection}>
        <img
          src="./Images/homeVideo.png"
          className={styles.heroImage}
          alt="Teaching Excellence Hero"
        />
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            Shape Your Future <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              with <p className={styles.eduvartanContainer}> Eduvartan</p>
            </div>
            Leading the Way in Education Excellence
          </h2>
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              <span className={styles.ctaText}>Watch Video</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72fced344ef36cf17788160a8b488ef7eb907afef4d39987c4916efba983105?placeholderIfAbsent=true&apiKey=65c3b0a390fd4311b72fcd91fc18e875"
                className={styles.ctaIcon}
                alt=""
              />
            </button>
            <button className={styles.ctaButtonBlue}>
              <span className={styles.ctaText}>Join Us</span>
              <i class="fa-solid fa-xs fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPath;
