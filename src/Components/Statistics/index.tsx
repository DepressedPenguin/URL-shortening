import styles from "./statistics.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import reco_img from "../../assets/CardsImages/icon-brand-recognition.svg";
import reco_limit from "../../assets/CardsImages/icon-detailed-records.svg";
import custom_izable from "../../assets/CardsImages/icon-fully-customizable.svg";
import { useEffect } from "react";

export default function Statistics() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className={styles.statisticsContainer}>
        <div className={styles.subStatistics}>
          <div className={styles.introStatistics} data-aos="flip-left">
            <h1>Advanced Statistics</h1>
            <p className={styles.paraText}>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className={styles.cardsStatistics}>
            <div className={styles.cardOne} data-aos="fade-up">
              <div className={styles.iconCard}>
                <img className={styles.imgCardreco} src={reco_img} />
              </div>
              <div>
                <h3>Brand Recognition</h3>
              </div>
              <div>
                <p className={styles.CardText}>
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instill confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className={styles.carTwo} data-aos="fade-up">
              <div className={styles.iconCard}>
                <img className={styles.imgCardreco} src={reco_limit} />
              </div>
              <div>
                <h3>Detailed Records</h3>
              </div>
              <div>
                <p className={styles.CardText}>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className={styles.carThree} data-aos="fade-up">
              <div className={styles.iconCard}>
                <img className={styles.imgCardreco} src={custom_izable} />
              </div>
              <div>
                <h3>Fully Customizable</h3>
              </div>
              <div>
                <p className={styles.CardText}>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
