import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import { VideoTag } from "react-video-tag";
import videoBg from "../videos/webvideoOpt.webm";
import ActiveLink from "./ActiveLink";
import Button from "./Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <VideoTag
        className={styles.backVideo}
        src={videoBg + "#t=0.001"}
        autoPlay
        loop
        muted
        playsInline
      />
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
