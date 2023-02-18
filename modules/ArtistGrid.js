import styles from "@/styles/ArtistGrid.module.css";
import ArtistCard from "./ArtistCard";

const ArtistGrid = ({ artists }) => {
  return (
    <div className={styles.grid}>
      {artists?.map((a) => (
        <div key={a.name}>
          <ArtistCard artist={a} />
        </div>
      ))}
    </div>
  );
};

export default ArtistGrid;
