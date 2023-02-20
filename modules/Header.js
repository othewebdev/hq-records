import styles from "@/styles/Header.module.css";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { DynamicLogo } from "./dynamic";
import Hamburger from "@/assets/hamburger.webp";
import Image from "next/image";

const Header = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={fix ? styles.headerSticky : styles.header}>
      <nav className={styles.nav}>
        <div className={styles.headerLogo}>
          <ActiveLink href="/" isTransparent>
            <DynamicLogo className={styles.headerLogo} />
          </ActiveLink>
        </div>
        <div className={styles.links}>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/artists">Artists</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </div>
        <div className={styles.mobileLinks}>
          <Image
            src={Hamburger}
            className={styles.hamburger}
            alt="Mobile Menu"
            width={24}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
