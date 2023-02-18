import styles from "@/styles/Hero.module.css";
import { VideoTag } from "react-video-tag";
import videoBg from "../videos/webvideoOpt.webm";
import ActiveLink from "./ActiveLink";
import Button from "./Button";
import { motion } from "framer-motion";

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
        <div>
          <motion.div
            className={styles.innerTextContainer}
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
            <h1 data-text="HQ Records">HQ Records</h1>
            <p>WE CREATE WITHOUT LIMITS.</p>
          </motion.div>
        </div>
        <motion.div
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
          <ActiveLink href="/artists" isTransparent>
            <Button text="explore more" />
          </ActiveLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
