import styles from "@/styles/ArtistSocials.module.css";
import Image from "next/image";

const ArtistSocials = ({ artist }) => {
  return (
    <div className={styles.socialLinksOuter}>
      <div className={styles.socialLinksInner}>
        {artist.socials?.map((s) => (
          <a href={s.href}>
            <Image src={s.logo} alt={artist.name + " " + s.name} width={48} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtistSocials;
