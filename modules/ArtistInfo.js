import React from "react";
import styles from "@/styles/ArtistInfo.module.css";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.artistInfoContainer}>
      <div className={styles.artistInfoGrid}>
        <div id="col1">
          <p>{artist.name}</p>
        </div>
        <div id="col2">
          <div>{artist.biography}</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
