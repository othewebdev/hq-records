import React from "react";
import styles from "@/styles/Button.module.css";

const Button = ({ text, onClick, disabled, type, secondary }) => {
  return (
    <button
      className={secondary ? styles.secondaryButton : styles.primaryButton}
      onClick={() => onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
