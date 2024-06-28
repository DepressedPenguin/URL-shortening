import styles from "./navbar.module.scss";
import logo from "../../assets/images/logo.svg";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header className={styles.mainHeader} data-aos="fade-down">
        <nav className={styles.mainNavbar}>
          <div className={styles.leftNav}>
            <ul className={styles.ul_left}>
              <li className={styles.logoLi}>
                <img src={logo} alt="Logo" />
              </li>
              <li className={styles.li_left_nav}>Features</li>
              <li className={styles.li_left_nav}>Pricing</li>
              <li className={styles.li_left_nav}>Resources</li>
            </ul>
          </div>
          <div className={styles.rightNav}>
            <ul className={styles.ul_right}>
              <li className={styles.loginLi}>Login</li>
              <li className={styles.liSignUp}>Sign Up</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE HEADER */}
      <div className={styles.menuToggle}>
        {!isMobileMenu && (
          <>
            <li className={styles.logoLi}>
              <img src={logo} alt="Logo" />
            </li>
            <i
              onClick={() => setIsMobileMenu(!isMobileMenu)}
              style={{
                fontSize: 50,
                color: "#2eccca",
                cursor: "pointer",
              }}
              className="bi bi-list"
            ></i>
          </>
        )}
      </div>
      {isMobileMenu && (
        <header className={styles.mainHeaderMobile} data-aos="fade-down">
          <nav className={styles.mainNavbarMobile}>
            <i
              onClick={() => setIsMobileMenu(!isMobileMenu)}
              style={{
                fontSize: 40,
                color: "#2eccca",
                cursor: "pointer",
              }}
              className="bi bi-list"
            ></i>
            <div className={styles.leftNav}>
              <ul className={styles.ul_left}>
                <li className={styles.logoLi}>
                  <img src={logo} alt="Logo" />
                </li>
                <li className={styles.li_left_nav}>Features</li>
                <li className={styles.li_left_nav}>Pricing</li>
                <li className={styles.li_left_nav}>Resources</li>
              </ul>
            </div>
            <div className={styles.rightNav}>
              <ul className={styles.ul_right}>
                <li className={styles.loginLi}>Login</li>
                <li className={styles.liSignUp}>Sign Up</li>
              </ul>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
