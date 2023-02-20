import styles from "@/styles/MobileMenu.module.css";
import { HqContext } from "@/utils/hqContext";
import { useContext } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useContext(HqContext);

  const handleClose = (e) => {
    document.body.style.overflowY = "visible";
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <aside className={styles.mobileMenu}>
          <span onClick={() => handleClose()}>x</span>
          <ul>
            <a href="/" onClick={() => handleClose()}>
              <li>Home</li>
            </a>
            <a href="/about" onClick={() => handleClose()}>
              <li>About</li>
            </a>
            <a href="/artists" onClick={() => handleClose()}>
              <li>Artists</li>
            </a>
            <a href="contact/" onClick={() => handleClose()}>
              <li>Contact</li>
            </a>
          </ul>
        </aside>
      )}
    </>
  );
};

export default MobileMenu;
