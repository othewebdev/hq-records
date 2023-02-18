import React from "react";
import styles from "@/styles/PageHeader.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const PageHeader = ({ text, bgColor, goBack }) => {
  const router = useRouter();

  return (
    <div
      className={styles.header}
      style={{ backgroundColor: bgColor ? bgColor : "white" }}
    >
      <div className={styles.innerHeader}>
        {goBack && <div onClick={() => router.back()}>Go Back</div>}
        <motion.div
          key={router.route}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <h1 data-text={text}>
            <strong>{text}</strong>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
