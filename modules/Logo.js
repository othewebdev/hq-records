import Image from "next/image";
import React from "react";
import hqLogo from "@/assets/Logo_HQRecords.webp";

const Logo = ({ alt, w, h, mt, mb, mr, ml }) => {
  return (
    <Image
      placeholder="blur"
      loading="lazy"
      alt={alt ? alt : "HQ Records Logo"}
      src={hqLogo}
      width={w ? w : 68}
      height={h ? h : 68}
      style={{
        marginTop: mt + "px",
        marginBottom: mb + "px",
        marginLeft: ml + "px",
        marginRight: mr + "px",
      }}
    />
  );
};

export default Logo;
