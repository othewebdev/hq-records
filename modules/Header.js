import React, { useContext } from "react";
import Hamburger from "@/assets/hamburger.webp";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import { DynamicLogo } from "./dynamic";
import { HqContext } from "@/utils/hqContext";

const Header = () => {
  const [isOpen, setIsOpen] = useContext(HqContext);
  const handleOpen = () => {
    document.body.style.overflowY = "hidden";
    return setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
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
            onClick={() => handleOpen()}
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
