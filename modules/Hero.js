import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Hero.module.css";
import videoBg from "../videos/webvideoOpt.webm";
import Button from "./Button";
import ActiveLink from "./ActiveLink";

const Hero = () => {
  const router = useRouter();
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.backVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
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
