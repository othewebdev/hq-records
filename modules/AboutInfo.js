import React, { useCallback } from "react";
import styles from "@/styles/AboutInfo.module.css";

const AboutInfo = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}></div>
        <div className={styles.row}>about</div>
      </div>
    </div>
  );
};

export default AboutInfo;
