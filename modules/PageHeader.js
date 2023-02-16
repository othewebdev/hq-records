import React from "react";
import styles from "@/styles/PageHeader.module.css";
import { useRouter } from "next/router";

const PageHeader = ({ text, bgColor, goBack }) => {
  const router = useRouter();

  return (
    <div
      className={styles.header}
      style={{ backgroundColor: bgColor ? bgColor : "white" }}
    >
      <div className={styles.innerHeader}>
        {goBack && <div onClick={() => router.back()}>Go Back</div>}
        <h1 data-text={text}>
          <strong>{text}</strong>
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
