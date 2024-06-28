import styles from "./urlinput.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ReadyUrlModal from "../Modals/ReadyUrlModal";

export default function UrlInput(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [ShortIt, setShortIt] = useState<string>("");
  const [isReadyUrl, setIsReadyUrl] = useState<boolean>(false);

  const postUrlApi = async (): Promise<void> => {
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer d06ae6ab3e06a21faebf45f146cc85a795679b2f",
        },
        body: JSON.stringify({
          long_url: inputValue,
        }),
      });
      const data = await response.json();
      console.log(data);
      setIsReadyUrl(true);
      setShortIt(data.link);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.mainUrlInput} data-aos="zoom-in">
        <div className={styles.subUrlInput}>
          <input
            placeholder="Shorten a link here..."
            className={styles.urlInput}
            type="text"
            name="url"
            id="url"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={postUrlApi} className={styles.btn_short}>
            Shorten it!
          </button>
        </div>
      </div>
      {
        isReadyUrl && (
          <ReadyUrlModal ShortIt={ShortIt} />
        ) /* Check ReadyUrlModalProps for correct type */
      }
    </>
  );
}
