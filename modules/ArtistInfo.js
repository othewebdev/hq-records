import React from "react";
import styles from "@/styles/ArtistInfo.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const ArtistInfo = ({ artist, altName }) => {
  return (
    <div className={styles.artistInfoContainer}>
      <div className={styles.artistInfoGrid}>
        <div id={styles.imgColumn}>
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
            <Image src={artist.image} alt={artist.name} />
          </motion.div>
        </div>
        <div id={styles.bioColumn}>
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
            {altName ? (
              <p id={styles.artistName}>{artist.altName}</p>
            ) : (
              <p id={styles.artistName}>{artist.name}</p>
            )}
            <span>
              <p>{artist.location}</p>
            </span>
            <p>{artist.biography}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
