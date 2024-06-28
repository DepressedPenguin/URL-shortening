import styles from "./footer.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.mainFooter}>
        <div className={styles.footerLogo}>
          <h1 className={styles.headlineFooter}>Shortly</h1>
        </div>
        <div className={styles.ulsFooter}>
          <div className={styles.ulDiv1}>
            <ul className={styles.ulFeatures}>
              <li className={styles.headlineAllUl}>Features</li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={styles.ulDiv2}>
            <ul className={styles.ulResources}>
              <li className={styles.headlineAllUl}>Resources</li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.ulDiv3}>
            <ul className={styles.CompaanyUl}>
              <li className={styles.headlineAllUl}>Company</li>
              <li>About</li>
              <li>OurTeam</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <ul className={styles.ulSocialMedia}>
            <li>
              <i
                className={`${styles.iconSocial} ${styles.facebookIcon} bi bi-facebook`}
              ></i>
            </li>
            <li>
              <i
                className={`${styles.iconSocial} ${styles.xIcon} bi bi-twitter-x`}
              ></i>
            </li>
            <li>
              <i
                className={`${styles.iconSocial} ${styles.pinIcon} bi bi-pinterest`}
              ></i>
            </li>
            <li>
              <i
                className={`${styles.iconSocial} ${styles.instaColor} bi bi-instagram`}
              ></i>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
