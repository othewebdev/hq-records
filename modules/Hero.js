import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Hero.module.css";
import videoBg from "../videos/webvideoOpt.webm";
import Button from "./Button";
import ActiveLink from "./ActiveLink";

const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <video className={styles.backVideo} autoPlay loop muted playsInline>
        <source src={videoBg} />
      </video>
      <div className={styles.innerContainer}>
        <div className={styles.innerTextContainer}>
          <h1 data-text="HQ Records">HQ Records</h1>
          <p>WE CREATE WITHOUT LIMITS.</p>
        </div>
        <ActiveLink href="/artists" isTransparent>
          <Button text="explore more" />
        </ActiveLink>
      </div>
    </div>
  );
};

export default Hero;
