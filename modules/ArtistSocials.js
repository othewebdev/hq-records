import Image from "next/image";
import React from "react";
import styles from "@/styles/ArtistSocials.module.css";

const ArtistSocials = ({ artist }) => {
  const selectImage = ({ name }) => {
    let imageUrl = "";
    switch (name) {
      case "Apple Music":
        imageUrl = "";
        return imageUrl;

      case "Spotify":
        imageUrl = "";
        return imageUrl;

      case "Instagram":
        imageUrl = "";
        return imageUrl;

      case "YouTube":
        imageUrl = "";
        return imageUrl;

      case "TikTok":
        imageUrl = "";
        return imageUrl;

      default:
        break;
    }
  };
  return (
    <div className={styles.socialLinksOuter}>
      <div className={styles.socialLinksInner}>
        {artist.socials.map((s) => (
          <a href={() => selectImage(s.name)}>
            <Image src={s.href} alt={artist.name + " " + s.name} width={32} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArtistSocials;
