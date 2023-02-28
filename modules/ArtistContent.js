import ARTISTS from "@/data/artistsInformation";
import React from "react";
import ArtistInfo from "./ArtistInfo";
import ArtistReleases from "./ArtistReleases";
import ArtistSocials from "./ArtistSocials";

import PageHeader from "./PageHeader";

const ArtistContent = ({ artistName, altName }) => {
  const artist = ARTISTS.find((a) => a.name === artistName);

  return (
    <div>
      <PageHeader text={artistName} />
      <ArtistInfo artist={artist} altName={altName} />
      <ArtistSocials artist={artist} />
    </div>
  );
};

export default ArtistContent;
