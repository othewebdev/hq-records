import styles from "@/styles/ArtistGrid.module.css";
import ActiveLink from "./ActiveLink";
import ArtistCard from "./ArtistCard";

const ArtistGrid = ({ artists }) => {
  return (
    <div className={styles.grid}>
      {artists?.map((a) => (
        <ActiveLink key={a.name} href={a.href} isTransparent>
          <div key={a.name}>
            <ArtistCard artist={a} />
          </div>
        </ActiveLink>
      ))}
    </div>
  );
};

export default ArtistGrid;
