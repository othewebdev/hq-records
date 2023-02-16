import styles from "@/styles/Hero.module.css";
import { useEffect, useRef } from "react";
import videoBg from "../videos/webvideoOpt.webm";
import ActiveLink from "./ActiveLink";
import Button from "./Button";

const Hero = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.backVideo}
        controls
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
