import React from "react";
import styles from "@/styles/ArtistCard.module.css";
import Image from "next/image";
import ImgA from "@/assets/test.webp";

const ArtistCard = ({ artist }) => {
  return (
    <div className={styles.card}>
      <div className={styles.innerCard}>
        <p className={styles.cardArtistName}>{artist.name}</p>
        <Image
          src={artist.image || ImgA}
          className={styles.cardImage}
          alt={artist.name}
        />
      </div>
    </div>
  );
};

export default ArtistCard;
