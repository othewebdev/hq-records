import React from "react";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";
import hqLogo from "@/assets/Logo_HQRecords.webp";

const Logo = ({ alt, w, h, mt, mb, mr, ml }) => {
  return (
    <Image
      className={styles.logo}
      loading="lazy"
      alt={alt ? alt : "HQ Records Logo"}
      src={hqLogo}
      width={w ? w : 68}
      height={h ? h : 68}
      style={{
        marginTop: mt + "px",
        marginBottom: mb + "px",
        marginLeft: ml + "px",
        marginRight: mr + "px",
      }}
    />
  );
};

export default Logo;
