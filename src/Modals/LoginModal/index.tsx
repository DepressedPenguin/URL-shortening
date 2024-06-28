import styles from "./loginmodal.module.scss";

interface PropsLogin {
  isLoginForm: boolean;
  setIsLoginForm: () => void;
}

export default function LoginModal({
  isLoginForm,
  setIsLoginForm,
}: PropsLogin) {
  // FUNCTION FOR TEST SUCESS AND ERROR MODAL
  const handlSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Success");
    alert("SUCCESS");
  };
  return (
    <>
      <div
        onClick={() => setIsLoginForm(!isLoginForm)}
        className={styles.LoginDarkenParent}
      >
        <div className={styles.LoginModalPrent}>
          <div className={styles.LoginForm}>
            <form className={styles.formClass}>
              <div className={styles.headlineLogin}>
                <h1 className={styles.h1Login}>LOGIN</h1>
              </div>
              <div className={styles.formLogin}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className={styles.inputForm}
                />
              </div>
              {/* PASSWORD */}
              <div className={styles.formLogin}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Paswords"
                  className={styles.inputForm}
                />
              </div>
              {/* BTN TO LOGIN */}
              <div className={styles.formLogin}>
                <input
                  onClick={handlSubmitLogin}
                  className={styles.btn_login}
                  type="submit"
                  value="LOG IN"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
