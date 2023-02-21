import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Footer.module.css";
import ActiveLink from "./ActiveLink";
import { DynamicLogo } from "./dynamic";

const Footer = () => {
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div onClick={() => router.push("/")} className={styles.footerLogo}>
        <DynamicLogo mt="82" w="96" h="96" />
      </div>
      <ActiveLink href="/privacy-policy">
        <p>Privacy policy</p>
      </ActiveLink>
      <p>© {currentYear} HQ Records / HQ Records Limited </p>
    </footer>
  );
};

export default Footer;
