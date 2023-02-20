import React from "react";
import styles from "@/styles/ArtistReleases.module.css";
import ReleaseCard from "./ReleaseCard";

const ArtistReleases = ({ artist }) => {
  return (
    <div className={styles.releasesContainer}>
      <div className={styles.releasesGrid}>
        {artist.releases?.map((r) => (
          <ReleaseCard key={r.name} release={r} />
        ))}
      </div>
    </div>
  );
};

export default ArtistReleases;
