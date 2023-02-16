import Image from "next/image";
import React from "react";
import styles from "@/styles/ArtistInfo.module.css";

const ArtistInfo = ({ artist }) => {
  return (
    <div className={styles.artistInfo}>
      <div className={styles.innerInfo}>
        <Image
          src={artist.image || ""}
          alt={artist.name + "Biography"}
          width={300}
          loading="eager"
        />
        <div>{artist.biography}</div>
      </div>
    </div>
  );
};

export default ArtistInfo;
