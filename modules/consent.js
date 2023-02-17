import React, { useEffect, useState } from "react";
import styles from "@/styles/Consent.module.css";
import { setCookie, hasCookie } from "cookies-next";
import {
  consentStatement as consentAgree,
  consentGreeting,
} from "@/data/consentStatement";

function Consent() {
  const [consent, setConsent] = useState(true);
  const [isConsentSet, setIsConsentSet] = useState(false);

  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
  };

  if (isConsentSet === false) {
    return (
      <footer
        style={{ display: consent ? "none" : "block" }}
        className={styles.container}
      >
        <p id={styles.greeting}>{consentGreeting}</p>
        <p>{consentAgree}</p>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              acceptCookie();
            }}
          >
            Accept
          </button>
          <button onClick={(e) => denyCookie()}>Decline</button>
        </div>
      </footer>
    );
  } else {
    return null;
  }
}

export default Consent;
