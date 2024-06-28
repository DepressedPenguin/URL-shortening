import styles from "./slider.module.scss";

import bg_slider from "../../assets/images/illustration-working.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.mainSlider} data-aos="zoom-in">
        <div className={styles.subSlider}>
          <div className={styles.leftSlider}>
            <h1 className={styles.headlineLeftSection}>
              More than just shorter links
            </h1>
            <p className={styles.para_headline}>
              Build your brand's recognition and get deatailed
              <br /> insights on how your links are performing
            </p>
            <button className={styles.btn_started}>Get Started</button>
          </div>
          <div className={styles.rightSlider}>
            <img src={bg_slider} alt={bg_slider} />
          </div>
        </div>
      </div>
    </>
  );
}
