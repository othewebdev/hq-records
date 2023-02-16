import React, { useState, useEffect } from "react";
import { DynamicLogo } from "./dynamic";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const router = useRouter();
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
        <div onClick={() => router.push("/")} className={styles.headerLogo}>
          <DynamicLogo className={styles.headerLogo} />
        </div>
        <div className={styles.links}>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/artists">Artists</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
