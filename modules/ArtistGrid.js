import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/ArtistGrid.module.css";
import ArtistCard from "./ArtistCard";

const ArtistGrid = ({ artists }) => {
  const router = useRouter();

  return (
    <div className={styles.grid}>
      {artists?.map((a) => (
        <div key={a.name} onClick={() => router.push(a.href.toString())}>
          <ArtistCard artist={a} />
        </div>
      ))}
    </div>
  );
};

export default ArtistGrid;
