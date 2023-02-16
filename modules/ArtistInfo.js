import React from "react";
import styles from "@/styles/ArtistInfo.module.css";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.artistInfoContainer}>
      <div className={styles.artistInfoGrid}>
        <div id="imgColumn"></div>
        <div id="bioColumn">
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
