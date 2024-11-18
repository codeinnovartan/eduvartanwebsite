import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <img src="./Images/eduvartanLogoBlue.png" alt="Eduvartan Logo" />
        </div>

        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.mobileActive : ""
          }`}
        >
          <ul>
            <li>Home</li>
            <li>
              <div className={styles.dropdown}>
                <div className={styles.dropbtn}>
                  Courses
                  <i className="fa-solid fa-xs fa-chevron-down"></i>
                </div>
                <div className={styles.dropdownContent}>
                  <p>Physics IIT-JEE/NEET</p>
                  <p>Chemistry IIT-JEE/NEET</p>
                  <p>Maths IIT-JEE</p>
                  <p>Biology NEET</p>
                </div>
              </div>{" "}
            </li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <button className={styles.demoButton}>Book a Demo</button>
          <button className={styles.loginButton}>Login/Signup</button>
        </nav>

        <div className={styles.mobileIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <div className={styles.getStarted}>
              <p>Get Started with Eduvartan</p>
              <a href="tel:+919319888783" className={styles.contactButton}>
                📞 Call: +91 9319 888 783
              </a>
              <button className={styles.demoButton}>Get Started</button>
              <button className={styles.loginButton}>Login/Signup</button>
            </div>
          </div>
        )}
      </header>
      <div className={styles.screens} >{children}</div>
    </div>
  );
};

export default Navbar;
