import styles from "./readyurlmodal.module.scss";

interface PropsInput {
  ShortIt: string;
}

export default function ReadyUrlModal({ ShortIt }: PropsInput) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(ShortIt)
      .then(() => {
        alert("Copied");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <>
      <div className={styles.ParentDarken}>
        <div className={styles.ParentModal}>
          <div className={styles.ReadyModal}>
            <div className={styles.img_Side}>
              <img
                className={styles.imgClass}
                src="https://i.imgur.com/iblA4kB.png"
                alt="Shortened URL"
              />
            </div>
            <div className={styles.urlSide}>
              <div className={styles.urlInput}>
                <input
                  type="text"
                  name="shortUrl"
                  id="shortUrl"
                  value={ShortIt}
                  className={styles.inputShortit}
                  readOnly
                />
                <p className={styles.copySpan} onClick={copyToClipboard}>
                  <i className={`${styles.iconCopy} fa fa-copy`}></i>
                </p>
              </div>
              <div className={styles.thanskP}>
                <p>
                  Thank you for using our service! Your shortened URL is ready
                  to use. Enjoy seamless sharing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
