import styles from "@/styles/ArtistCard.module.css";
import { motion } from "framer-motion";

const ArtistCard = ({ artist }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${artist.imageUrl})` }}
    >
      <a key={artist.name} href={artist.href}>
        <motion.div
          className={styles.innerCard}
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
          <p className={styles.cardArtistName}>{artist.name}</p>
        </motion.div>
      </a>
    </div>
  );
};

export default ArtistCard;
