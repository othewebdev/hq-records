import Hamburger from "@/assets/hamburger.webp";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import { DynamicLogo } from "./dynamic";

const Header = () => {
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
