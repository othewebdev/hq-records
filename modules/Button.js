import React from "react";
import styles from "@/styles/Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.primaryButton} onClick={() => onClick}>
      {text}
    </button>
  );
};

export default Button;
