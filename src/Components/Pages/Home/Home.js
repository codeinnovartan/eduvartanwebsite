import React from "react";
import styles from "./Home.module.css";
import AdvanceCareer from "./AdvanceCareer/AdvanceCareer";
import YourPath from "./YourPath/YourPath";

const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <AdvanceCareer />
      <YourPath />
    </div>
  );
};

export default Home;
