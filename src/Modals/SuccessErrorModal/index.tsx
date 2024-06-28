import styles from "./successerror.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface propsModal {
  modalType: string;
}

export default function SuccessErrorModal({ modalType }: propsModal) {
  return (
    <>
      <div className={styles.DarkenParent}>
        <div className={styles.ModalParent}>
          <div className={styles.SucErrModal}>
            <div className={styles.headlineIcon}>
              {modalType === "error" ? (
                <i className={`${styles.iconError} bi bi-x-circle`}></i>
              ) : (
                <i className={`${styles.iconSuccess} bi bi-check-circle`}></i>
              )}
            </div>
            <div className={styles.messageShort}>
              {modalType === "error" ? (
                <h1 className={styles.modalMessage}>Invaild email!</h1>
              ) : (
                <h1 className={styles.modalMessageSuccess}>Oh Yeah!</h1>
              )}
            </div>
            <div className={styles.messageLong}>
              {modalType === "error" ? (
                <p className={styles.paraMessage}>User Or Password Wrong</p>
              ) : (
                <p className={styles.paraMessageSuccess}>
                  You have successfully logged in.
                </p>
              )}
            </div>
            <div className={styles.btn_modal}>
              <button className={styles.btn_md}>OK!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
