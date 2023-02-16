import styles from "@/styles/Hero.module.css";
import videoBg from "../videos/webvideoOpt.webm";
import ActiveLink from "./ActiveLink";
import Button from "./Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <video
        preload="metadata"
        className={styles.backVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg + "#t=0.001"} type="video/mp4" />
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
