import Image from "next/image";
import React from "react";
import styles from "@/styles/ArtistInfo.module.css";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.artistInfo}>
      <div className={styles.innerInfo}>
        <div className={styles.artistImage}>
          <Image
            className={styles.innerImage}
            src={artist.image || ""}
            alt={artist.name + " " + "Biography"}
            loading="eager"
          />
        </div>
        <div className={styles.artistBio}>
          <p className={styles.innerBio}>{artist.biography}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
