import styles from "./singupmodal.module.scss";

export default function SingUpModal({ isSignUp, setIsSignUp }) {
  return (
    <>
      <div
        onClick={() => setIsSignUp(!isSignUp)}
        className={styles.DarkenParent}
      >
        <div className={styles.ModalParent}>
          <div className={styles.SignUpForm}>
            {/* HEADLINE SING UP */}
            <div className={styles.headlineForm}>
              <h1 className={styles.SignUpHeadline}>SIGN UP</h1>
            </div>
            {/* FORM INPUTS */}
            <form className={styles.formInputs}>
              <div className={styles.groupInput}>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              {/* FORM INPUT EMAIL */}
              <div className={styles.groupInput}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={styles.inputForm}
                />
              </div>
              {/* FORM INPUT PASSWORD */}
              <div className={styles.groupInput}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={styles.inputForm}
                />
              </div>
              <div className={styles.groupInput}>
                <input
                  type="password"
                  name="code"
                  id="code"
                  placeholder="Code"
                  className={styles.inputForm}
                />
              </div>
              <div className={styles.btnSingUpDiv}>
                <button className={styles.btnSingUp}>SING UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
