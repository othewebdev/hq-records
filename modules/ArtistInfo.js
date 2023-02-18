import styles from "@/styles/ArtistInfo.module.css";
import { motion } from "framer-motion";

const ArtistInfo = ({ artist, altName }) => {
  return (
    <div className={styles.artistInfoContainer}>
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
        <div className={styles.artistInfoGrid}>
          <div
            style={{
              backgroundImage: `url(${artist.imageUrl})`,
              width: "100%",
              height: "550px",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              objectFit: "fill",
            }}
          />
          <div id={styles.bioColumn}>
            {altName ? (
              <p id={styles.artistName}>{artist.altName}</p>
            ) : (
              <p id={styles.artistName}>{artist.name}</p>
            )}
            <span>
              <p>{artist.location}</p>
            </span>
            <p>{artist.biography}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistInfo;
