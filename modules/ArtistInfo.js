import React from "react";
import styles from "@/styles/ArtistInfo.module.css";
import Image from "next/image";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.artistInfoContainer}>
      <div className={styles.artistInfoGrid}>
        <div id={styles.imgColumn}>
          <Image src={artist.image} alt={artist.name} />
        </div>
        <div id={styles.bioColumn}>
          <p id={styles.artistName}>{artist.name}</p>
          <span>
            <p>{artist.location}</p>
          </span>
          <p>{artist.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
