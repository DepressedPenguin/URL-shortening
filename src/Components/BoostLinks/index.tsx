import { useEffect } from "react";
import styles from "./boostlinks.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

// import bg_boos from "../../assets/images/bg-boost-desktop.svg";

export default function BoostLinks() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className={styles.boostLinksSection} data-aos="fade-up">
        <h1 className={styles.h1Boos}>Boost your links today</h1>
        <button className={styles.btnStarted}>Get Started</button>
      </section>
    </>
  );
}
